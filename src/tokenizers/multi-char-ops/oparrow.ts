/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Operator Arrow(denoted by '->'), will be tokenized with it's appropriate values
*/

import { Token } from '../../interfaces/token';

export const tokenizeOpArrow = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {
   
    const tok: Token = {
        tokenId: 51,
        startLineNum: lineNum,
        endLineNum: lineNum,
        startIdx: index,
        endIdx: index + 1,
        lineRelativeIdx,
        value: '->',
    }

    return tok;
}
