import { FormattedTree } from '../interfaces/formatted';
import { ScopeStack } from '../utils/ScopeStack';
import { getIdentifier } from './identifier';
import { calculateValue } from './value';

/**
 * Obtains an identifier from the symbol table and assigns it a value.
 * Then it edits the symbol table with the new value
 */
export const assign = (node: FormattedTree, scope: ScopeStack) => {
    //Assignment needs to store value into left child and get a value from right child
    let symbol;

    const idNode = getIdentifier(node.Children[0]); //Left Child should always have an identifier
    
    if(idNode){
        symbol = scope.retrieveSymbol(idNode);
    }
    else{
        throw("Error: assignment statement does not contain an identifer")
    }
    
    const value = calculateValue(node.Children[1], scope); //Right Child must evaluate to an assignable value

    if(symbol) {
        symbol.value = value; //No type checking currently
        scope.editSymbol(idNode.Value, symbol);
    }
}
