/*
    List of tokens in the language and their assigned IDs
*/
export const tokenIdsByName: { [key:string]: number } = {
    id: 2,
    int: 3,
    float: 4,
    string: 5,
    comma: 6,
    semi: 7,
    kwdprog: 10,
    kwdmain: 11,
    kwdfcn: 12,
    kwdclass: 13,
    kwdfloat: 15,
    kwdint: 16,
    kwdstring: 17,
    kwdif: 18,
    kwdelseif: 19,
    kwdelse: 20,
    kwdwhile: 21,
    kwdinput: 22,
    kwdprint: 23,
    kwdnew: 24,
    kwdreturn: 25,
    kwdvars: 26,
    angle1:31,
    angle2:32,
    brace1:33,
    brace2:34,
    bracket1:35,
    bracket2:36,
    parens1:37,
    parens2:38,
    aster:41,
    caret:42,
    colon:43,
    dot:44,
    equal:45,
    minus:46,
    plus:47,
    slash:48,
    ampersand:49,
    oparrow:51,
    opeq:52,
    opne:53,
    ople:54,
    opge:55,
    opshl:56,
    opshr:57,
    error:99,
    eof:0
};

const accumulator: any = {};
export const tokenNamesById = Object.keys(tokenIdsByName).reduce((acc, termName) => {
    acc[tokenIdsByName[termName] as any] = termName;
    return acc;
}, accumulator);
