import { FormattedTree } from '../interfaces/formatted';
import { ScopeStack } from '../utils/ScopeStack';

/*
 * Recursively evaluates a node and its children to obtain a typed value
 */
export const calculateValue = (node: FormattedTree, scope: ScopeStack) => {
    if(!node) return;

    let value;
    const id = node.TokenId;

    if(id === 2) { //Retrieve value from identifier symbol
        return scope.retrieveSymbol(node).value;
    }

    if(id === 3) return parseInt(node.Value); //Single int, float, or string detected
    if(id === 4) return parseFloat(node.Value);
    if(id === 5) return node.Value; 
    
    //Evaluate for math
    //todo: currently concatenation is not supported, todo: order of operations is not supported
    let total: number = 0;
    if(id === 47){ //Addition Operation Encountered
        node.Children.forEach(operand => {
            //Add values retrieved from the children
            total += parseFloat(calculateValue(operand, scope)); 
        });
    }
    else if(id === 46){ //Subtraction
        total = parseFloat(calculateValue(node.Children[0], scope));
        node.Children.slice(1).forEach(operand => {
            total -= parseFloat(calculateValue(operand, scope)); 
        });
    }
    else if(id === 41){ //Multiplication
        total = parseFloat(calculateValue(node.Children[0], scope));
        node.Children.slice(1).forEach(operand => {
            total *= parseFloat(calculateValue(operand, scope)); 
        });
    }
    else if(id === 48){ //Division
        total = parseFloat(calculateValue(node.Children[0], scope));
        node.Children.slice(1).forEach(operand => {
            total /= parseFloat(calculateValue(operand, scope)); 
        });
    }

    value = total;

    return value;
}
