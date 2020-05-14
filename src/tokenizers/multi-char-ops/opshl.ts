/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Operator Shift Left(denoted by '<<'), will be tokenized with it's appropriate values
*/

import { Token } from '../../interfaces/token';

export const tokenizeOpShiftLeft = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {
   
    const tok: Token = {
        tokenId: 56,
        startLineNum: lineNum,
        endLineNum: lineNum,
        startIdx: index,
        endIdx: index + 1,
        lineRelativeIdx,
        value: '<<',
    }

    return tok;
}
