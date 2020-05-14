/**
 * Defines the data held within a printed node of a tree
 */
export interface FormattedTree {
    Name: string,
    TokenId: number,
    Value: any,
    Origin: number, //Formally used as key, this is the node ID
    Children: FormattedTree[]
}
