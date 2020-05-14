import { TreeNode } from '../utils/tree';
import { hoistNode } from './hoistNode';
import { dropNode } from './dropNode';

const priorityTerms = [ //Lazy way of determining which symbols should take precedence in hoisting, refer to tokenIds for value names
    10, 11, 18, 19, 20, 21, 22, 23, 24, 25, 26, 41, 45, 46,
    47, 48, 49, 51, 52, 53, 54, 55, 56, 57
]

/*
 * Middleman function to determine the operations performed on a node and its children
 */
export const bigSisterRule = (node: TreeNode<any>) => {
    //If the node has no children, exit func
    if (!node.children.length) {
        dropNode(node); //Before exiting, check if the node needs to be removed
        return;
    }

    let chosenNode;

    //Case: 1, If only one child, elevate it
    if(node.children.length === 1) chosenNode = node.children[0]; 

    //Case: 2, Elevate a node determined to have high precedence
    if(!chosenNode) chosenNode = node.children.find(child => priorityTerms.indexOf(child.data.tokenId) !== -1)

    //Case: 3, If none, then locate the first child that is a terminal
    if(!chosenNode) chosenNode = node.children.find(child => !child.data.ruleName);
    
    //Case: 4, Probably unneeded, but get the first child within its set of siblings that has no child nodes
    if(!chosenNode) chosenNode = node.children.find(child => !child.children.length);
    
    //If the above cases didn't work, just elevate the first child
    if (!chosenNode) chosenNode = node.children[0];
    
    return hoistNode(chosenNode);
}
