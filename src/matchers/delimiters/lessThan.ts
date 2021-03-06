/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Less Than sign(denoted by '<' ), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../../interfaces/ascii";

export const matchLessThan = (charCode: number) => charCode === ASCII.LESS_THAN;

