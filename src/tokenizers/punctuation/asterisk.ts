/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Punctuation Asterisk(denoted by '*'), will be tokenized with it's appropriate values
*/

import { Token } from '../../interfaces/token';

export const tokenizeAsterisk = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {
   
    const tok: Token = {
        tokenId: 41,
        startLineNum: lineNum,
        endLineNum: lineNum,
        startIdx: index,
        endIdx: index,
        lineRelativeIdx,
        value: '*',
    }

    return tok;
}
