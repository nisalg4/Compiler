/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Left Square Bracket sign(denoted by '[' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../../interfaces/ascii";

export const matchLeftSquareBracket = (charCode: number) => charCode === ASCII.LEFT_SQUARE_BRACKET;
