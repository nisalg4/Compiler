import { syntaxError } from '../utils/errorHandlers';
import { Token } from '../interfaces/token';
import { matchNewline } from '../matchers/newline';
import { matchString } from '../matchers/string';

/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Values within "" will be recognized as Strings and will be tokenized
*/

export const tokenizeString = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token =>{
    const startingRelativeIdx = lineRelativeIdx;
    const delineator = source[index];

    if(!matchString(delineator, 0)) syntaxError(`Expected the start of a string on line ${lineNum} at column ${lineRelativeIdx}.\nBegin a string with a single or double quotation mark`, lineNum, index);
  
    let currentIdx = index + 1;
    let text = "";

    while(true){
        const char = source[currentIdx];
        const charCode = char.charCodeAt(0); 
        
        if(char === delineator) break;

        if(matchNewline(charCode) || currentIdx + 1 >= source.length) syntaxError(`Unterminated string literal on line ${lineNum} at column ${lineRelativeIdx}.\nClose a declared string literal with a single or double quotation mark`, lineNum, index);    

        text += char;
        currentIdx++;
        lineRelativeIdx++;
    }

    const endIdx = currentIdx;

    const tok: Token = {
        tokenId: 5,
        startLineNum: lineNum,
        endLineNum: lineNum,
        lineRelativeIdx: startingRelativeIdx,
        startIdx: index,
        endIdx,
        value: text,
    }

    return tok;
}
