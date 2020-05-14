/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Strings will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

export const matchString = (source: string, index: number) => {
    const charCode = source.charCodeAt(index);
    return charCode === ASCII.APOSTROPHE || charCode === ASCII.QUOTATION_MARK;
}