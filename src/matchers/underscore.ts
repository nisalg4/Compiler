/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Underscore (denoted by '_' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

export const matchUnderscore = (charCode: number) => charCode === ASCII.UNDERSCORE;
