/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Operator Not Equal(denoted by '!='), will be tokenized with it's appropriate values
*/

import { Token } from '../../interfaces/token';

export const tokenizeOpNotEqual = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {
   
    const tok: Token = {
        tokenId: 53,
        startLineNum: lineNum,
        endLineNum: lineNum,
        startIdx: index,
        endIdx: index + 1,
        lineRelativeIdx,
        value: '!=',
    }

    return tok;
}
