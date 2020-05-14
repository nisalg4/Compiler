import { FormattedTree } from '../interfaces/formatted';
import { ScopeStack } from '../utils/ScopeStack';
import { calculateValue } from './value';

/**
 * Prints a value recursively
 * todo, should build a string and print it at the end instead of multiple console.logs
 */
export const print = (node: FormattedTree, scope: ScopeStack) => {
    if(!node) return;

    let value = calculateValue(node.Children[0], scope);
    if(value) console.log(value);

    print(node.Children[0], scope);    
}
