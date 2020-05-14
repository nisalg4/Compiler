import {tokenNamesById } from "../interfaces/tokenIds";
import { FormattedTree } from "../interfaces/formatted";

export class TreeNode<T> {
    public data: any;
    private parent: TreeNode<T> | null = null;
    public children: TreeNode<T>[];
    private workingStatus: number; //When above 0, a working node will exist for it

    constructor(data: T) {
        this.data = data;
        this.children = [];
        this.workingStatus = 0;
    }

    getWorkingStatus(){
        return this.workingStatus;
    }

    getData(): T {
        return this.data;
    }

    getParent(): TreeNode<T> | null {
        return this.parent;
    }

    pushChild(n: TreeNode<T>) {
        this.children.push(n);
        n.setParent(this);
    }

    spliceChild(n: TreeNode<T>) {
        this.children.splice(0, 0, n);
        n.setParent(this);
    }

    setParent(n: TreeNode<T> | null) {
        this.parent = n;
    }
    
    setWorkingStatus(n: number){
        this.workingStatus = n;
    }

    advanceStatus(){
        this.workingStatus -= 1;
    }
}

export const getPrintablePST = (node: any) => {
    let nodeName;

    //If the node has a matched rewriting rule, it is a NonTerminal
    if(node.data.ruleName){
        nodeName = node.data.ruleName;
        nodeName = nodeName[0].toUpperCase() + nodeName.slice(1); //Capitalize the first letter
    } 
    else nodeName = tokenNamesById[node.data.tokenId] //If it's a terminal, get the name from the token list
        
    const tree: FormattedTree =(
    {
        Name: nodeName,
        TokenId: node.data.tokenId,
        Value: node.data.token.value,
        Key: node.data.nodeID,
        Children: node.children.map((child: any) => getPrintablePST(child))
    });

    return tree;
}

export const printTree = (node: TreeNode<any>) => {
    console.log(JSON.stringify(getPrintablePST(node), null, 2));
}
