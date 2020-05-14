import { matchDigits } from '../matchers/digits';
import { matchPeriod } from '../matchers/period';
import { syntaxError } from '../utils/errorHandlers';
import { Token } from '../interfaces/token';

/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Valid numbers such digits and floats are recognized and tokenized
*/

export const tokenizeNumber = (source: string, lineNum: number, index: number, lineRelativeIdx: number): Token => {
    const startingRelativeIdx = lineRelativeIdx;
    let currentIdx = index;

    let isFloat = false;

    // Track our current token value EX: "2.54"
    let value = "";

    while (true && currentIdx < source.length) {
        const char = source[currentIdx];
        const charCode = char.charCodeAt(0);

        let isPeriod = matchPeriod(charCode);

        if (isPeriod && isFloat) syntaxError(`Encountered unexpected period on line ${lineNum} at column ${lineRelativeIdx}`, lineNum, index);

        if (isPeriod) {
            isFloat = true;
        }

        const isNumber = matchDigits(charCode);

        // Stop collecting input for token
        if (!isNumber && !isPeriod) {
            break;
        }

        // Save valid input for our token
        value += char;

        lineRelativeIdx++;
        currentIdx++;
    }

    // End index is the last valid tokenized character, not the current value
    const endIdx = currentIdx - 1;

    const tok: Token = {
        tokenId: isFloat ? 4 : 3,
        startLineNum: lineNum,
        endLineNum: lineNum,
        lineRelativeIdx: startingRelativeIdx,
        startIdx: index,
        endIdx,
        value,
        numericValue: isFloat ? parseFloat(value) : parseInt(value)
    }

    return tok;
}
