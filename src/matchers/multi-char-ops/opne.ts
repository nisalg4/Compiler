/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Operator Not Equal (denoted by '!=' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../../interfaces/ascii";
//!=
export const matchOpNotEqual = (source: string, index: number) =>{
    if(index + 1 >= source.length) return false;
    const charCode = source.charCodeAt(index);
    const charCode2 = source.charCodeAt(index + 1);
    return (charCode === ASCII.EXCLAMATION_MARK && charCode2 === ASCII.EQUALS);
}