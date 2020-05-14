import { FormattedTree } from '../interfaces/formatted';

/**
 * Obtains the child node containing an ID Symbol
 * A kwd declaration is the parent of the node containing the id
 */
export const getIdentifier = (node: FormattedTree): FormattedTree => {
    if(node.TokenId === 2) {
        return node;
    }

    const identifier = getIdentifier(node.Children[0]);

    return identifier;
}
