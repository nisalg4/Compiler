/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Slash (denoted by '/' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

// Matcher for '/' character
export const matchSlash = (charCode: number) => charCode === ASCII.SLASH;