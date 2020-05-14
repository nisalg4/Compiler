/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Left Parenthesis sign(denoted by '(' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../../interfaces/ascii";

export const matchLeftParen = (charCode: number) => charCode === ASCII.LEFT_PARENTHESIS;
