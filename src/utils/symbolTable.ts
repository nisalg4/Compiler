import { Symbol } from '../interfaces/symbol';

export class SymbolTable {
    private map: { [key:string]: Symbol }

    constructor(){
        this.map = {};
    }

    set(key: string, entry: Symbol){
        this.map[key] = entry;
    }

    get(key: string){
        const entry: Symbol = this.map[key];
        if(entry) return entry
        return null;
    }

    printTable(){
        console.log("\n--- Current Symbol Table")
        console.log(this.map);
    }
}
