import { bigSisterRule } from './bigSisterRule';
import { TreeNode } from '../utils/tree';

export const pstToAST = (node: TreeNode<any>) => {
    //Base Case
    if (node == null) return;

    //Recursive calls should be done Post-Order
    node.children.forEach(child => pstToAST(child));

    //Call on Children
    return bigSisterRule(node) || node; // Return new relative top level element (default to this element)
}
