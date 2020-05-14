import { Token } from '../interfaces/token';
import { matchNewline } from '../matchers/newline';

/*
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Within comments(denoted by //), any sequence is allowed that does not contain an end-of-line character
 * Once the end-of-line character has been recognized, comment scanning ends.
 */
export const tokenizeComment = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token =>{
    const startIdx = index;
    let currentIdx = index + 1;
   
    while(true && currentIdx < source.length){
        const char = source[currentIdx];
        const charCode = char.charCodeAt(0);  

        //If a new line character is reached, the comment has ended
        if(matchNewline(charCode)) break;

        currentIdx++;
    }
    
    const endIdx = currentIdx - 1;

    const tok: Token = {
        tokenId: 1,
        startLineNum: lineNum,
        endLineNum: lineNum,
        startIdx,
        endIdx,
        lineRelativeIdx,
        value: '//',
    }

    return tok;
    
}
