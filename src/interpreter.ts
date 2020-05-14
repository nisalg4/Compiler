import { ScopeStack } from './utils/ScopeStack';
import { FormattedTree } from './interfaces/formatted';
import { assign } from './evaluators/assignment';
import { print } from './evaluators/print';

/*
    444 Interpreter
    "An AST has been constructed as described in, we walk (make a pass over) the AST for two purposes:
    to process symbol declarations and to connect each symbol reference with its declaration"
*/

const fs = require('fs');

// ---- Read Source ----
const sourcePath = process.argv[2];
const outPath = process.argv[3];
const source = fs.readFileSync(sourcePath).toString();

const root: FormattedTree = JSON.parse(source);

// --- Scope Treewalk, Generate Symbol Table(s)
const scope = new ScopeStack(root);

scope.printScopes();

// --- Semantic Treewalk
const walk = (node: FormattedTree) => {
    if(!node) return;

    if(node.TokenId === 45){ //An equal sign
        assign(node, scope);
    }
    if(node.TokenId === 23){
        console.log("\n --Debug Message, executing detected print statement:")
        print(node, scope);
    }

    node.Children.forEach(child => walk(child));
}

console.log("\n -----After semantic analysis, running acod code")

walk(root);

scope.printScopes();
 