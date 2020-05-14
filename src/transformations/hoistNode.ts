import { TreeNode } from '../utils/tree';

// Swaps a node with its parent, handling connections
export const hoistNode = (node: TreeNode<any>) => {
    const parent = node.getParent(); //Grab current parent
    const grandparent = parent ? parent.getParent() : null; //Grab parent's parent

    if(parent){
        // Copy parent's children
        node.children = [ ...node.children, ...parent.children.filter(sibling => sibling !== node) ];
       
        node.children.sort(function(a, b){
            return (a.data.nodeID - b.data.nodeID)
        });
        
        // Set each sibling's parent upref
        node.children.forEach(child => child.setParent(node));
    }

    // Set replace parent with this node in parent's parent
    if (parent && grandparent) {
        grandparent.children.splice(grandparent.children.indexOf(parent), 1, node);
        
        // Set this nodes parent to parent's parent
        node.setParent(grandparent);
    } else {
        node.setParent(null);
    }

    //console.log("---------------Resultant children: " + node.children);
    return node; // new relative top node
}
