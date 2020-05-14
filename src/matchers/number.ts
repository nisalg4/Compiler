/**
 * Author: Steven Lim, Julian Poyourow, William Jorgensen,
 * Contact: limstevenlbw@gmail.com, julianpoyo@gmail.com, willwjorgensen@yahoo.com
 * Numbers will be matched will be recognized by this matcher and exports the matching charcode
*/

import { ASCII } from "../interfaces/ascii";

export const matchNumber = (source: string, index: number) => {
    const charCode = source.charCodeAt(index);
    
    if(charCode >= ASCII.DIGIT_0 && charCode <= ASCII.DIGIT_9){
        return true;
    }
    else if(charCode === ASCII.PERIOD && index + 1 < source.length){
        const charCode2 = source.charCodeAt(index + 1);
        return charCode2 >= ASCII.DIGIT_0 && charCode2 <= ASCII.DIGIT_9;
    }
    
    return false;
}
