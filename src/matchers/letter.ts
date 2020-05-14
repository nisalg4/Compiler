/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Letters (A-Z, a-z), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

export const matchLetter = (charCode: number) => {
    const isUpperCase = charCode >= ASCII.UPPERCASE_A && charCode <= ASCII.UPPERCASE_Z;
    const isLowerCase = charCode >= ASCII.LOWERCASE_A && charCode <= ASCII.LOWERCASE_Z;

    return isUpperCase || isLowerCase;
}
