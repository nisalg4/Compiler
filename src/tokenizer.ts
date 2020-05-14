import fs from 'fs';

import { Token } from "./interfaces/token";
import { syntaxError } from './utils/errorHandlers';
import { matchNewline } from './matchers/newline';
import { matchNumber } from './matchers/number';
import { matchUnderscore } from './matchers/underscore';
import { matchComment } from './matchers/comment';
import { matchSlash } from './matchers/slash';
import { matchWhiteSpace } from './matchers/whitespace'
import { matchLetter } from './matchers/letter';
import { matchString } from './matchers/string';

import { matchLessThan } from './matchers/delimiters/lessThan';
import { matchGreaterThan } from './matchers/delimiters/greaterThan';
import { matchLeftCurlyBrace } from './matchers/delimiters/leftCurlyBrace';
import { matchRightCurlyBrace } from './matchers/delimiters/rightCurlyBrace';
import { matchLeftSquareBracket } from './matchers/delimiters/leftSquareBracket';
import { matchRightSquareBracket } from './matchers/delimiters/rightSquareBracket';
import { matchLeftParen } from './matchers/delimiters/leftParen';
import { matchRightParen } from './matchers/delimiters/rightParen';
import { matchComma } from './matchers/delimiters/comma';
import { matchSemiColon } from './matchers/delimiters/semicolon';
import { matchOpArrow } from './matchers/multi-char-ops/oparrow';
import { matchOpEquality } from './matchers/multi-char-ops/opeq';
import { matchOpGreaterOrEqual } from './matchers/multi-char-ops/opge';
import { matchOpLessOrEqual } from './matchers/multi-char-ops/ople';
import { matchOpNotEqual } from './matchers/multi-char-ops/opne';
import { matchOpShiftLeft } from './matchers/multi-char-ops/opshl';

import { matchAmpersand } from './matchers/punctuation/ampersand';
import { matchAsterisk } from './matchers/punctuation/asterisk';
import { matchCaret } from './matchers/punctuation/caret';
import { matchColon } from './matchers/punctuation/colon';
import { matchEqual } from './matchers/punctuation/equal';
import { matchMinus } from './matchers/punctuation/minus';
import { matchPlus } from './matchers/punctuation/plus'; 

import { tokenizeOpArrow } from './tokenizers/multi-char-ops/oparrow';
import { tokenizeOpEquality } from './tokenizers/multi-char-ops/opeq';
import { tokenizeOpGreaterOrEqual } from './tokenizers/multi-char-ops/opge';
import { tokenizeOpLessOrEqual } from './tokenizers/multi-char-ops/ople';
import { tokenizeOpNotEqual } from './tokenizers/multi-char-ops/opne';
import { tokenizeOpShiftLeft } from './tokenizers/multi-char-ops/opshl';
import { tokenizeAmpersand } from './tokenizers/punctuation/ampersand';
import { tokenizeAsterisk } from './tokenizers/punctuation/asterisk';
import { tokenizeCaret } from './tokenizers/punctuation/caret';
import { tokenizeColon } from './tokenizers/punctuation/colon';
import { tokenizeEqual } from './tokenizers/punctuation/equal';
import { tokenizeMinus } from './tokenizers/punctuation/minus';
import { tokenizePlus } from './tokenizers/punctuation/plus'; 
import { matchPeriod } from './matchers/period';
import { tokenizeDot } from './tokenizers/punctuation/dot';
import { tokenizeLessThan } from './tokenizers/delimiters/lessThan';
import { tokenizeGreaterThan } from './tokenizers/delimiters/greaterThan';
import { tokenizeLeftCurlyBrace } from './tokenizers/delimiters/leftCurlyBrace';
import { tokenizeRightCurlyBrace } from './tokenizers/delimiters/rightCurlyBrace';
import { tokenizeLeftSquareBracket } from './tokenizers/delimiters/leftSquareBracket';
import { tokenizeRightSquareBracket } from './tokenizers/delimiters/rightSquareBracket';
import { tokenizeLeftParen } from './tokenizers/delimiters/leftParen';
import { tokenizeRightParen } from './tokenizers/delimiters/rightParen';
import { tokenizeComma } from './tokenizers/delimiters/comma';
import { tokenizeSemiColon } from './tokenizers/delimiters/semicolon';

import { tokenizeNumber } from './tokenizers/number';
import { tokenizeNewLine } from './tokenizers/newline'
import { tokenizeComment } from './tokenizers/comment';
import { tokenizeSlash } from './tokenizers/slash';
import { tokenizeIdentifier } from './tokenizers/identifier';
import { tokenizeString } from './tokenizers/string';

/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Main module where a file is read and parsed, to recognize each input of the file to tokenize
 * and output on a specific format displaying it's values
*/

// ---- Read Source ----

const sourcePath = process.argv[2];
const outPath = process.argv[3];

const source = fs.readFileSync(sourcePath).toString();

// ---- Begin Parsing ----

const tokens: Token[] = [];
let lineNum = 1;
let cursorLoc = 0; // Holds our current cursor location at any given time
let lineRelativeCursorLoc = 0; // Holds our current line relative cursor location at any given time

while (cursorLoc < source.length) {
    const char = source[cursorLoc];
    const charCode = source.charCodeAt(cursorLoc);

    let tokenizeFunc; // Holds our tokenizer to be called later
    let newCursorLoc = cursorLoc; // Holds our new cursor position to be compared later

    if (matchWhiteSpace(charCode)) {
        //A tester to see if it detects and outputs the proper ASCII code for Whitespace
        cursorLoc++;
        lineRelativeCursorLoc++;
        continue;   
    }
    if (matchNewline(charCode)) tokenizeFunc = tokenizeNewLine;

    if (matchNumber(source, cursorLoc)) tokenizeFunc = tokenizeNumber;
    else if(matchLetter(charCode) || matchUnderscore(charCode)) tokenizeFunc = tokenizeIdentifier;
    else if(matchComment(source, cursorLoc)) tokenizeFunc = tokenizeComment; //Checking for Comments
    else if(matchSlash(charCode)) tokenizeFunc = tokenizeSlash;    //Checking for Slash
    else if(matchString(source, cursorLoc)) tokenizeFunc = tokenizeString;

    //Multi-Char Operators must be checked before single char tokens
    else if(matchOpArrow(source, cursorLoc)) tokenizeFunc = tokenizeOpArrow;
    else if(matchOpEquality(source, cursorLoc)) tokenizeFunc = tokenizeOpEquality;
    else if(matchOpGreaterOrEqual(source, cursorLoc)) tokenizeFunc = tokenizeOpGreaterOrEqual;
    else if(matchOpLessOrEqual(source, cursorLoc)) tokenizeFunc = tokenizeOpLessOrEqual;
    else if(matchOpNotEqual(source, cursorLoc)) tokenizeFunc = tokenizeOpNotEqual;
    else if(matchOpShiftLeft(source, cursorLoc)) tokenizeFunc = tokenizeOpShiftLeft;
     
    //Single Char Tokens
    else if(matchAmpersand(charCode)) tokenizeFunc = tokenizeAmpersand;
    else if(matchAsterisk(charCode)) tokenizeFunc = tokenizeAsterisk;
    else if(matchCaret(charCode)) tokenizeFunc = tokenizeCaret;
    else if(matchColon(charCode)) tokenizeFunc = tokenizeColon;
    else if(matchEqual(charCode)) tokenizeFunc = tokenizeEqual;
    else if(matchMinus(charCode)) tokenizeFunc = tokenizeMinus;
    else if(matchPlus(charCode)) tokenizeFunc = tokenizePlus;
    else if(matchPeriod(charCode)) tokenizeFunc = tokenizeDot;

    //Delimeter Tokens

    //Unpaired delmiters
    else if(matchComma(charCode)) tokenizeFunc = tokenizeComma;
    else if(matchSemiColon(charCode)) tokenizeFunc = tokenizeSemiColon;

    //Paired Delimeters
    else if(matchLessThan(charCode)) tokenizeFunc = tokenizeLessThan;
    else if(matchGreaterThan(charCode)) tokenizeFunc = tokenizeGreaterThan;
    else if(matchLeftCurlyBrace(charCode)) tokenizeFunc = tokenizeLeftCurlyBrace;
    else if(matchRightCurlyBrace(charCode)) tokenizeFunc = tokenizeRightCurlyBrace;
    else if(matchLeftSquareBracket(charCode)) tokenizeFunc = tokenizeLeftSquareBracket;
    else if(matchRightSquareBracket(charCode)) tokenizeFunc = tokenizeRightSquareBracket;
    else if(matchLeftParen(charCode)) tokenizeFunc = tokenizeLeftParen;
    else if(matchRightParen(charCode)) tokenizeFunc = tokenizeRightParen;

    if (tokenizeFunc) {
        const tokenizeResult = tokenizeFunc(source, lineNum, cursorLoc, lineRelativeCursorLoc);
        if(tokenizeResult.tokenId !== 1 && tokenizeResult.tokenId !== 666) tokens.push(tokenizeResult);
        
        // Move cursor to the character after our recognized token
        newCursorLoc = tokenizeResult.endIdx + 1;
        lineNum = tokenizeResult.endLineNum;

        lineRelativeCursorLoc += tokenizeResult.endIdx - tokenizeResult.startIdx + 1;
        if (tokenizeResult.startLineNum !== tokenizeResult.endLineNum) {
            lineRelativeCursorLoc = 0;
        }
    }

    // If cursor hasn't moved, we haven't recognized a token (whether it called a tokenizer or not)
    if (cursorLoc === newCursorLoc) {
        syntaxError(`Unrecognized token ${char} at on line ${lineNum} at position ${lineRelativeCursorLoc}`, lineNum, cursorLoc);
    }

    cursorLoc = newCursorLoc;
}

// TODO: Push EOF token here

// ---- Print Results ----
const eof: Token = {
    tokenId: 0,
    startLineNum: lineNum,
    endLineNum: lineNum,
    lineRelativeIdx: lineRelativeCursorLoc,
    startIdx: 0,
    endIdx: 0,
    value: "",
}

tokens.push(eof);

const logs = tokens.map(token => {
    let floatPrint = ''; // Dont print numeric values if not exists
    if (typeof token.numericValue === "number") floatPrint = ` flo= ${token.numericValue}`;
    return `(Tok: ${token.tokenId} lin= ${token.startLineNum},${token.lineRelativeIdx} str= "${token.value}${floatPrint}")`;
});

logs.forEach(log => {
    console.log(log);
});

const out = logs.join('\r\n')

fs.writeFileSync(outPath, JSON.stringify(tokens));
