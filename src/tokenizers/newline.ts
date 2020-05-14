import { Token } from '../interfaces/token';
import { ASCII } from '../interfaces/ascii';

/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Newlines within the source are tokenized
*/

export const tokenizeNewLine = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {
    const startIdx = index;
    let endIdx = startIdx;

    let value = '';
    if (source.charCodeAt(startIdx) === ASCII.CARRIAGE_RETURN || source.charCodeAt(startIdx + 1) === ASCII.LINE_FEED) {
        endIdx = startIdx + 1;
        value += source[startIdx] + source[startIdx + 1];
    } else {
        value += source[startIdx];
    }

    const tok: Token = {
        tokenId: 666,
        startLineNum: lineNum,
        endLineNum: lineNum + 1,
        startIdx,
        endIdx,
        lineRelativeIdx,
        value
    }

    return tok;
}
