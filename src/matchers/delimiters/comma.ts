/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Comma notation(denoted by ','), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../../interfaces/ascii";

export const matchComma = (charCode: number) => charCode === ASCII.COMMA;
