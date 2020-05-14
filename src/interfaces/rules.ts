/*
    In formal language theory, an LL grammar is derived from a context-free grammar 
    It is simplified in such a way that it can be parsed by the LL parser.
    This is a representation of our language's grammar rules.
*/

export const Rules: { [key: number]: {name: string, vals: string[]} } = {
    1: {
        name: 'pgm',
        vals: ['kwdprog', 'vargroup', 'fcndefs', 'main']
    },
	2: {
        name: 'main',
        vals: ['kwdmain', 'bblock']
    },
	3: {
		name: 'bblock',
		vals: ['brace1', 'vargroup', 'stmts', 'brace2']
	},	
	4: {
		name: 'vargroup',
		vals: ['kwdvars', 'ppvarlist']
	},
	5: {
		name: 'vargroup',
		vals: [] // EPS
    },
    6: {
        name: 'ppvarlist',
        vals: ['parens1', 'varlist', 'parens2']
    },
    //CUSTOM RULES
    501: {
        name: 'ppvarlist',
        vals: ['vargroup'] //CUSTOM ALLOW NEW VARIABLES AFTER STATEMENTS
    },
    7: {
        name: 'varlist', //PPvarlist is replaced by this as a custom rule when no parens1 is encountered
        vals: ['varitem', 'semi', 'varlist']
    },
    8: {
        name: 'varlist',
        vals: [] //EPS
    },
    9: {
        name: 'varitem',
        vals: ['vardecl', 'varitem_']
    }, 
    201: { //Rules 10-11 are purposely nonexistant
        name: 'varitem',
        vals: ['classdecl', 'varclass_']
    },
    202: {
        name: 'varclass_',
        vals: [] //EPS
    },
    203: {
        name: 'varclass_',
        vals: ['classmom', 'interfaces', 'classdef']
    },
    12: {
        name: 'varitem_',
        vals: [] //EPS
    },
    13: {
        name: 'varitem_',
        vals: ['equal', 'varinit']
    },
    14: {
        name: 'vardecl',
        vals: ['simplekind', 'varspec']
    },
    15: {
        name: 'simplekind',
        vals: ['basekind']
    },
    16: {
        name: 'simplekind',
        vals: ['classid']
    },
    17: {
        name: 'basekind',
        vals: ['kwdint']
    },
    18: {
        name: 'basekind',
        vals: ['kwdfloat']
    },
    19: {
        name: 'basekind',
        vals: ['kwdstring']
    },
    20: {
        name: 'classid',
        vals: ['id']
    },
    21: {
        name: 'varspec',
        vals: ['deref_id']
    },
    22: {
        name: 'varspec',
        vals: ['varid', 'varspec_']
    },
    23: {
        name: 'varspec_',
        vals: [] //EPS
    },
    24: {
        name: 'varspec_',
        vals: ['kkint']
    },
    25: {
        name: 'varid',
        vals: ['id']
    },
    26: {
        name: 'kkint',
        vals: ['bracket1', 'int', 'bracket2']
    },
    27: {
        name: 'deref_id',
        vals: ['deref', 'id']
    },
    28: {
        name: 'deref',
        vals: ['aster']
    },
    29: {
        name: 'varinit',
        vals: ['expr']
    },
    30: {
        name: 'varinit',
        vals: ['bbexprs']
    },
    31: {
        name: 'bbexprs',
        vals: ['brace1', 'bbexprs_']
    },
    32: {
        name: 'bbexprs_',
        vals: ['exprlist', 'brace2']
    },
    33: {
        name: 'bbexprs_',
        vals: ['brace2']
    },
    34: {
        name: 'exprlist',
        vals: ['expr', 'moreexprs']
    },
    35: {
        name: 'moreexprs',
        vals: ['comma', 'exprlist']
    },
    36: {
        name: 'moreexprs',
        vals: [] //EPS
    },
    37: {
        name: 'classdecl',
        vals: ['kwdclass', 'classid']
    },
    38: {
        name: 'classdef',
        vals: ['classheader', 'classdef_']
    },
    39: {
        name: 'classdef_',
        vals: ['bbclassitems']
    },
    40: {
        name: 'classdef_',
        vals: ['kif', 'bbclassitems']
    },
    41: {
        name: 'bbclassitems',
        vals: ['brace1', 'classitems', 'brace2']
    },
    42: {
        name: 'classheader',
        vals: ['classdecl', 'classmom', 'interfaces']
    },
    43: {
        name: 'classmom',
        vals: ['colon', 'classid']
    },
    44: {
        name: 'classmom',
        vals: [] //EPS
    },
    45: {
        name: 'classitems',
        vals: ['classgroup', 'classitems']
    },
    46: {
        name: 'classitems',
        vals: [] //EPS
    },
    47: {
        name: 'classgroup',
        vals: ['class_ctrl']
    },
    48: {
        name: 'classgroup',
        vals: ['vargroup']
    },
    49: {
        name: 'classgroup',
        vals: ['mddecls']
    },
    50: {
        name: 'class_ctrl',
        vals: ['colon', 'id']
    },
    51: {
        name: 'interfaces',
        vals: ['plus', 'classid', 'interfaces']
    },
    52: {
        name: 'interfaces',
        vals: [] //EPS
    },
    53: {
        name: 'mddecls',
        vals: ['mdheader', 'mddecls']
    },
    54: {
        name: 'mddecls',
        vals: [] //EPS
    },
    55: {
        name: 'mdheader',
        vals: ['kwdfcn', 'md_id', 'pparmlist', 'retkind']
    },
    56: {
        name: 'md_id',
        vals: ['classid', 'colon', 'fcnid']
    },
    57: {
        name: 'fcndefs',
        vals: ['fcndef', 'fcndefs']
    },
    58: {
        name: 'fcndefs',
        vals: [] //EPS
    },
    59: {
        name: 'fcndef',
        vals: ['fcnheader', 'bblock']
    },
    60: {
        name: 'fcnheader',
        vals: ['kwdfcn', 'fcnid', 'pparmlist', 'retkind']
    },
    61: {
        name: 'fcnid',
        vals: ['id']
    },
    62: {
        name: 'retkind',
        vals: ['basekind']
    },
    63: {
        name: 'varspecs',
        vals: ['varspec', 'more_varspecs']
    },
    64: {
        name: 'more_varspecs',
        vals: ['comma', 'varspecs']
    },
    65: {
        name: 'more_varspecs',
        vals: [] //EPS
    },
    66: {
        name: 'stmts',
        vals: ['stmt', 'semi', 'stmts']
    },
    67: {
        name: 'stmts',
        vals: [] //EPS
    },
    68: {
        name: "stmt",
        vals: ['id', 'stmt_']
    },
    69: { 
        name: 'stmt',
        vals: ['deref_id', 'equal', 'expr']
    },
    204: {
        name: 'stmt_',
        vals: ['ppexprs']
    },
    205: {
        name: 'stmt_',
        vals: ['lval_', 'equal', 'expr']
    },
    70: {
        name: 'stmt',
        vals: ['stif']
    },
    71: {
        name: 'stmt',
        vals: ['stwhile']
    },
    72: {
        name: 'stmt',
        vals: ['stprint']
    },
    73: {
        name: 'stmt',
        vals: ['strtn']
    },
    74: {
        name: 'stasgn',
        vals: ['lval', 'equal', 'expr']
    },
    75: {
        name: 'lval',
        vals: ['varid', 'lval_']
    },
    76: { 
        name: 'lval_',
        vals: [] //EPS
    },
    206: {
        name: 'lval_',
        vals: ['kkexpr']
    },
    77: {
        name: 'lval',
        vals: ['deref_id']
    },
    79: { //Rule 78 is a dead rule
        name: 'kkexpr',
        vals: ['bracket1', 'expr', 'bracket2']
    },
    81: { //Rule 80 is a dead rule
        name: 'pparmlist',
        vals: ['parens1', 'pparmlist_']
    },
    82: {
        name: 'pparmlist_',
        vals: ['varspecs', 'parens2']
    },
    83: {
        name: 'pparmlist_',
        vals: ['parens2']
    },
    84: {
        name: 'ppexprs',
        vals: ['parens1', 'ppexprs_']
    },
    85: {
        name: 'ppexprs_',
        vals: ['exprlist', 'parens2']
    },
    86: {
        name: 'ppexprs_',
        vals: ['parens2']
    },
    87: {
        name: 'stif',
        vals: ['kwdif', 'ppexpr', 'bblock', 'elsepart']
    },
    88: {
        name: 'elsepart',
        vals: ['kwdelseif', 'ppexpr', 'bblock', 'elsepart']
    },
    89: {
        name: 'elsepart',
        vals: ['kwdelse', 'bblock']
    },
    90: {
        name: 'elsepart',
        vals: [] //EPS
    },
    91: {
        name: 'stwhile',
        vals: ['kwdwhile', 'ppexpr', 'bblock']
    },
    92: {
        name: 'stprint',
        vals: ['kwdprint', 'ppexprs']
    },
    93: {
        name: 'strtn',
        vals: ['kwdreturn', 'strtn_']
    },
    94: {
        name: 'strtn_',
        vals: ['expr']
    },
    95: {
        name: 'strtn_',
        vals: [] //EPS
    },
    96: {
        name: 'ppexpr',
        vals: ['parens1', 'expr', 'parens2']
    },
    97: {
        name: 'expr',
        vals: ['rterm', 'expr_']
    },
    98: {
        name: 'expr_',
        vals: [] //EPS
    },
    99: {
        name: 'expr_',
        vals: ['oprel', 'rterm', 'expr_']
    },
    100: {
        name: 'rterm',
        vals: ['term', 'rterm_']
    },
    101: {
        name: 'rterm_',
        vals: [] //EPS
    },
    102: {
        name: 'rterm_',
        vals: ['opadd', 'term', 'rterm_']
    },
    103: {
        name: 'term',
        vals: ['fact', 'term_']
    },
    104: {
        name: 'term_',
        vals: [] //EPS
    },
    105: {
        name: 'term_',
        vals: ['opmul', 'fact', 'term_']
    },
    106: {
        name: 'fact',
        vals: ['baseliteral']
    },
    107: {
        name: 'fact',
        vals: ['addrof_id']
    },
    108: {
        name: 'fact',
        vals: ['ppexpr']
    },
    109: {
        name: 'fact',
        vals: ['id', 'fact_']
    },
    110: {
        name: 'fact_',
        vals: ['lval_']
    },
    111: {
        name: 'fact_',
        vals: ['ppexprs']
    },
    112: {
        name: 'baseliteral',
        vals: ['int']
    },
    113: {
        name: 'baseliteral',
        vals: ['float']
    },
    114: {
        name: 'baseliteral',
        vals: ['string']
    },
    115: {
        name: 'addrof_id',
        vals: ['ampersand', 'id']
    },
    116: {
        name: 'oprel',
        vals: ['opeq']
    },
    117: {
        name: 'oprel',
        vals: ['opne']
    },
    118: {
        name: 'oprel',
        vals: ['lthan']
    },
    119: {
        name: 'oprel',
        vals: ['ople']
    },
    120: {
        name: 'oprel',
        vals: ['opge']
    },
    121: {
        name: 'oprel',
        vals: ['gthan']
    },
    122: {
        name: 'lthan',
        vals: ['angle1']
    },
    123: {
        name: 'gthan',
        vals: ['ange2']
    },
    124: {
        name: 'opadd',
        vals: ['plus']
    },
    125: {
        name: 'opadd',
        vals: ['minus']
    },
    126: {
        name: 'opmul',
        vals: ['aster']
    },
    127: {
        name: 'opmul',
        vals: ['slash']
    },
    128: {
        name: 'opmul',
        vals: ['caret']
    }
}