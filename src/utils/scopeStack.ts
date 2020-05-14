import { SymbolTable } from './symbolTable';
import { Symbol } from '../interfaces/symbol';
import { FormattedTree } from '../interfaces/formatted';

/*
    "Symbol references are connected with declarations through the symbol table.
    -   An AST node that mentions a symbol by name is enriched with a reference to
    the name’s entry in the symbol table. If such a connection cannot be made,
    then the offending reference is improperly declared and an error message is issued.

    -   Otherwise, subsequent passes can use the symbol table reference to
    obtain information about the symbol, such as its type, storage requirements,
    and accessibility"
*/
export class ScopeStack{
    //--todo: Simple/Temp way of identifying symbol categories from token IDs
    private _blockList = [11]; //kwdmain is the only terminal that will open a scope in this project
    private _declList = [12,13,15,16,17]; //Declarations: kwdfcn, kwdclass, kwdfloat, kwdint, kwdstring
    private _refList = [2]; //Reference: id
    private scopes: Array<SymbolTable>

    constructor(node: FormattedTree) {  
        this.scopes = [];
        this.processSymbol(node);
    }

    /**
     * Recursive operation, traverses the AST to build the scoped symbol tables
     */
    processSymbol(node: FormattedTree){
        //Check what type of node it is
        if(this._blockList.indexOf(node.TokenId) !== -1){ 
            //Node symbol indicated a block
            this.openScope(); 
            console.log("\n---Debug: Opened a scope for ", node.Name);
        }
        else if(this._declList.indexOf(node.TokenId) !== -1){ 
            //Node symbol indicated a declaration
            this.enterSymbol(node.Children[0]);
            console.log("\n---Debug: Stored a symbol for ", node.Name, "Variable: ", node.Value);
        }
        else if(this._refList.indexOf(node.TokenId) !== -1){ 
            //Symbol indicated a reference, or variable/function/class usage
            this.retrieveSymbol(node);
            console.log("\n---Debug: Found a value for ", node.Name, "Variable: ", node.Value);
        }
        else{
            console.log("\n---Debug: SCT ignoring: ", node.Name);
        }

        //Recursively walk through the children
        if(node.Children) node.Children.forEach(child => {
            this.processSymbol(child);
        });

        /* todo: No need to work on this
        if(this._blockList.indexOf(node.tokenId) !== -1){ //Close the scope if it was created
            this.closeScope();
        }
        */
    }

    printScopes(){
        this.scopes.forEach(table => {table.printTable()});
    }

    /**
     * Pushes a new scope and symbol table onto the stack
     */
    openScope(){
        const newTable = new SymbolTable();
        this.scopes.push(newTable);
    }

    /**
     * Removes the most recent/nested scope
     */
    closeScope(){
        this.scopes.pop();
    }
    
    /*
     * Enters a name into the symbol table’s current scope.
     * The parameter type conveys the data type and access attributes of name’s declaration.
     */ 
    enterSymbol(node: FormattedTree) {
        const key = node.Value;
        const type = node.Name;
        const identifier = node.Value;
        const depth = this.scopes.length - 1;
        const entry: Symbol = {type, identifier, depth};

        this.scopes[this.scopes.length - 1].set(key, entry);
    }

    editSymbol(key: string, entry: Symbol) {
        this.scopes[this.scopes.length - 1].set(key, entry);
    }

    /*
     * todo Returns the symbol table’s stored entry for the declaration
     * If no declaration for the symbol is stored, throw an error
     */ 
    retrieveSymbol(node: FormattedTree) {
        //Test if symbol is in local scope, if it is, get it directly
        const symbol = this.scopes[this.scopes.length - 1].get(node.Value);

        //If the symbol is not there, loop through the outer scopes, and get it
        if(!symbol){} //not necessary for this project

        //If it's not there either, then the symbol doesn't exist, so throw an error
        if(!symbol){
            throw new Error(`Error: Identifier ${node.Value} was not declared`); // No reference found in symbol table
        }
        
        return symbol;
    }

}
