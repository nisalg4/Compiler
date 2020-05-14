import { TreeNode } from '../utils/tree';

const banList = [
    6, //comma: 
    7, //semi: 
    31, //angle1:
    32, //angle2:
    33, //brace1:
    34, //brace2:
    35, //bracket1:
    36, //bracket2:
    37, //parens1:
    38, //parens2:
];

/*
 * Modifies the PST such that a node containing punctuation
 * such as brackets and semi-colons are removed for AST conversion.
 * Note that this mutates a node in the original tree
 */
export const dropNode = (node: TreeNode<any>) => {
    if(node.data.ruleName || (banList.indexOf(node.data.tokenId) !== -1)){
        const parent = node.getParent();
        //if(parent) parent.children.splice(parent.children.indexOf(node), 1); //Drop it from its parents list of children
        if(parent) parent.children = parent.children.filter(child => child !== node); //Filters out the offending node
    }
}
