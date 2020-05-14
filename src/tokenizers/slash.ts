import { syntaxError } from '../utils/errorHandlers';
import { Token } from '../interfaces/token';
import { matchSlash } from '../matchers/slash'; 
import { tokenizeComment } from './comment';

export const tokenizeSlash = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {

    const tok: Token = {
        tokenId: 48,
        startLineNum: lineNum,
        endLineNum: lineNum,
        startIdx: index,
        endIdx: index,
        lineRelativeIdx,
        value: '/',
    }

    return tok;

}
