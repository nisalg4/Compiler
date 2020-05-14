import { matchDigits } from '../matchers/digits';
import { matchLetter } from '../matchers/letter';
import { matchUnderscore } from '../matchers/underscore';
import { Keywords } from '../interfaces/keywords';
import { Token } from '../interfaces/token';
import { syntaxError } from '../utils/errorHandlers';

/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Identifiers that are recognized, each individual word is tokenized
*/

export const tokenizeIdentifier = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {
    const startIdx = index;
    const firstCharCode = source[startIdx].charCodeAt(0);
    let currentIdx = index + 1;

    if(!matchUnderscore(firstCharCode) && !matchLetter(firstCharCode)) {
        syntaxError(`Encountered unexpected character while constructing identifier on line ${lineNum} at index ${lineRelativeIdx}.\nValid identifiers must begin with either a letter or underscore`, lineNum, index);
    }

    let identifier = source[startIdx]; //Tracks and builds the identifier name

    while(true && currentIdx < source.length){
        const currentChar = source[currentIdx];
        const charCode = currentChar.charCodeAt(0);

        //If the next character in evaluation is not valid to include, break the loop
        if(!matchLetter(charCode) && !matchDigits(charCode) && !(matchUnderscore(charCode))) break;
        
        identifier += currentChar;
        currentIdx++;
    }

    const endIdx = currentIdx - 1;
    let id = 2;

    //Check if identifier matched a keyword, else just return the token with the default id
    if(Keywords[identifier]){ 
        id = Keywords[identifier];
    }
        
    const tok: Token = {
        tokenId: id,
        startLineNum: lineNum,
        endLineNum: lineNum,
        startIdx,
        endIdx,
        lineRelativeIdx,
        value: identifier,
    }
    
    return tok;
}
