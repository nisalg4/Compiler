import { Token } from "./interfaces/token";
import { Rules } from "./interfaces/rules";
import { tokenIdsByName, tokenNamesById } from "./interfaces/tokenIds";
import { llTable } from "./interfaces/llTable";
import { PSTNode } from "./interfaces/pstNode";
import { pstToAST } from "./transformations/pstToAST";
import { TreeNode, printTree, getPrintablePST } from "./utils/tree";

const fs = require('fs');

// ---- Read Source ----

const sourcePath = process.argv[2]; // Should be JSON
const outPath = process.argv[3];

const source = fs.readFileSync(sourcePath).toString();

const tokens: Token[] = JSON.parse(source);

// ---- Setup Prediction Stack ----

const predictionStack: string[] = []; // Properly ordered now
const workingNodeStack: TreeNode<PSTNode>[] = []; //List of all working tree nodes

predictionStack.push("eof"); 
predictionStack.push("pgm"); //A Program should always start with pgm and end with eof

// ---- Setup Parse Tree ----
let baseNode = new TreeNode<PSTNode>({tokenId: 0, nodeID: 0});
let workingNode;

let i = 0;
let idCounter = -1; //Assigned to each node uniquely

while (i < tokens.length) {
    
    const token = tokens[i]; //Acquire the front of the token input stream
    const prediction = predictionStack[predictionStack.length - 1]; //Acquire the top of the prediction stack

    console.log("\n---Input/Current Working Token: ", tokenNamesById[token.tokenId]);
    console.log("Current LL stack: ", predictionStack);
    console.log("...Predicting: ", prediction);

    // ---- Handle Terminal Match First ----
    if (token.tokenId === tokenIdsByName[prediction]) {
        idCounter++;
        console.log("Terminal Match: ", tokenNamesById[token.tokenId], " matched a prediction.");
        predictionStack.pop();

        let pstNode = new TreeNode<PSTNode>({
            tokenId: token.tokenId,
            token: token,
            nodeID: idCounter
        });

        if (token.tokenId == 0 && baseNode) 
            baseNode.pushChild(pstNode); //If EOF encountered, push it to the base node
        else if(!baseNode)
            throw new Error(`Error occurred just before finishing parse, base node symbol was null or undefined`);
        else {
            workingNode = workingNodeStack[workingNodeStack.length - 1];
            workingNode.pushChild(pstNode);
            workingNode.advanceStatus();
            if(workingNode.getWorkingStatus() <= 0) workingNodeStack.pop();
        }
        i++; // Token matched, advance to next token
        continue;
    } else if (!llTable[prediction]) { // TODO: This is a hacky way of determining if top of prediction stack is a terminal
        // TODO: Should use a new custom error handler here (errorHandlers.ts)
        throw new Error(`Unexpected token ${tokenNamesById[token.tokenId]} at position ${token.lineRelativeIdx} on line ${token.startLineNum}`);
    }

    // ---- Acquire Rules from LL-Table Look-Up ----
    const cell = llTable[prediction][token.tokenId];
    if (!cell) { // Throw an error when an LL-Prediction was expected but did not exist
        
        // TODO: Should use a new custom error handler here (errorHandlers.ts)
        throw new Error(`Unexpected token ${tokenNamesById[token.tokenId]} at position ${token.lineRelativeIdx} on line ${token.startLineNum}`); 
    }

    // ---- Handle Updating the Prediction Stack ----
    predictionStack.pop();

    const newRules = Rules[cell].vals.slice().reverse(); //Replace the head with the reversed rule's symbols
    predictionStack.push(...newRules);
    
    // ---- Handle Epsilon Rule Encounter ----
    if(newRules.length === 0){
        console.log("Epsilon Rule encountered")
        workingNode = workingNodeStack[workingNodeStack.length - 1];
        workingNode.advanceStatus();
        if(workingNode.getWorkingStatus() <= 0) workingNodeStack.pop();
    } 
    else{ //New Rules Uncovered, A new child node will be pushed and it becomes the new working node
        idCounter++;
        console.log("New Rule Located, Pushing: ", Rules[cell].name, "with vals: ", Rules[cell].vals);

        // ---- Handle New Rules and Updating the Working Node Stack ----
        let pstNode = new TreeNode<PSTNode>({
            ruleName: Rules[cell].name, 
            tokenId: token.tokenId, 
            token: token, 
            nodeID: idCounter, 
            //workingStatus: newRules.length //TODO, currently unused
        });
        
        if(workingNodeStack.length === 0) //Base Case: Initialize the PST Base Node
            baseNode = pstNode; 
        else{
            workingNode = workingNodeStack[workingNodeStack.length - 1];
            workingNode.pushChild(pstNode);
            workingNode.advanceStatus();

            //If the status counter reaches 0, it means all of its children have been handled. Remove the node from the working stack
            if(workingNode.getWorkingStatus() <= 0) workingNodeStack.pop();
        }

        pstNode.setWorkingStatus(newRules.length); //TODO, Placeholder, sets up the counter for the new nonterminal node
        workingNodeStack.push(pstNode); //Add the new node of interest to the working stack
    }
}

console.log("====== PST =====")
printTree(baseNode);

const astBaseNode = pstToAST(baseNode);

console.log("\n====== AST =====")
if(astBaseNode) printTree(astBaseNode);


fs.writeFileSync(outPath, JSON.stringify(getPrintablePST(astBaseNode), null, 2));

console.log("\n---AST File written to: " + outPath)
