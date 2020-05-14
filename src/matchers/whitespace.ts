/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Whitespaces will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

export const matchWhiteSpace = (charCode: number) => {
    return charCode === ASCII.SPACE;
}
