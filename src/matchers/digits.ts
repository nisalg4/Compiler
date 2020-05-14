/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Numbers (0 - 9), will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

export const matchDigits = (charCode: number) => {
    return charCode >= ASCII.DIGIT_0 && charCode <= ASCII.DIGIT_9;
}