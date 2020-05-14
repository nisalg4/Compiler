/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Commas (denoted by '//' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

// Matcher for '//' comment specifier
export const matchComment = (source: string, index: number) => {
    if(index + 1 >= source.length) return false;
    const charCode = source.charCodeAt(index);
    const charCode2 = source.charCodeAt(index + 1);
    return (charCode === ASCII.SLASH && charCode2 === ASCII.SLASH);
}
    