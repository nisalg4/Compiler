//Lookup table for all keywords of the A5 language
//Keys are case-sensitive
export const Keywords: { [key:string]: number } = {
    prog: 10,
    main: 11,
    fcn: 12,
    class: 13,
    float: 15, //Not a typo, there is no token 14
    int: 16,
    string: 17,
    if: 18,
    elseif: 19,
    else: 20,
    while: 21,
    input: 22,
    print: 23,
    new: 24,
    return: 25,
    var: 26
};
