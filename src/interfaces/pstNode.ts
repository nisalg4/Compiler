import { Token } from "./token";
/**
 * Defines the data held within a node of the parse tree or abstract-syntax-tree
 */
export interface PSTNode {
    ruleName?: string,
    token?: Token,
    tokenId: number,
    nodeID: number,
   // workingStatus?: number //TODO currently unused, but might be better to initialize it here instead of in the parser
}