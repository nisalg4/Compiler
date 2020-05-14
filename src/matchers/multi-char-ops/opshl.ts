/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Operator Shift Left (denoted by '<<' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../../interfaces/ascii";
//<<
export const matchOpShiftLeft = (source: string, index: number) =>{
    if(index + 1 >= source.length) return false;
    const charCode = source.charCodeAt(index);
    const charCode2 = source.charCodeAt(index + 1);
    return (charCode === ASCII.LESS_THAN && charCode2 === ASCII.LESS_THAN);
}