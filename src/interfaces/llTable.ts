import { tokenIdsByName } from './tokenIds';

// ---- LL Table Representation ----
interface LLTable {
    [key: string]: LLPrediction
}

// The rule number that an LL Table entry is predicting
interface LLPrediction {
    [key: number]: number
}

export const llTable: LLTable = { // Rows by columns
    pgm: {
        [tokenIdsByName.kwdprog]: 1
    },
    main: {
        [tokenIdsByName.kwdmain]: 2
    },
	bblock: {
		[tokenIdsByName.brace1]: 3
	},
	vargroup: {
        [tokenIdsByName.brace2]: 5,
        [tokenIdsByName.id]: 5,
        [tokenIdsByName.aster]: 5,
        [tokenIdsByName.kwdprint]: 5,
        [tokenIdsByName.kwdprog]: 5,
        [tokenIdsByName.kwdvars]: 4,
        [tokenIdsByName.kwdmain]: 5,
        [tokenIdsByName.kwdfcn]: 5,
        [tokenIdsByName.kwdif]: 5,
        [tokenIdsByName.kwdwhile]: 5,
    },
    ppvarlist: {
        [tokenIdsByName.parens1]: 6,
        [tokenIdsByName.kwdint]: 7, //CUSTOM
        [tokenIdsByName.kwdstring]: 7,//CUSTOM
        [tokenIdsByName.kwdfloat]: 7,//CUSTOM
    },
    varlist: {
        [tokenIdsByName.parens2]: 8,
        [tokenIdsByName.brace2]: 8, //CUSTOM
        [tokenIdsByName.kwdprint]: 8, //CUSTOM
        [tokenIdsByName.kwdvars]: 4,//CUSTOM
        [tokenIdsByName.id]: 7,
        [tokenIdsByName.kwdint]: 7,
        [tokenIdsByName.kwdfloat]: 7,
        [tokenIdsByName.kwdstring]: 7,
        [tokenIdsByName.kwdclass]: 7
    },
    varitem: {
        [tokenIdsByName.id]: 9,
        [tokenIdsByName.kwdint]: 9,
        [tokenIdsByName.kwdfloat]: 9,
        [tokenIdsByName.kwdstring]: 9,
        [tokenIdsByName.kwdclass]: 201
    },
    varitem_: {
        [tokenIdsByName.semi]: 12,
        [tokenIdsByName.equal]: 13
    },
    varclass_: {
        [tokenIdsByName.semi]: 202,
        [tokenIdsByName.colon]: 203
    },
    vardecl: {
        [tokenIdsByName.id]: 14,
        [tokenIdsByName.kwdint]: 14,
        [tokenIdsByName.kwdfloat]: 14,
        [tokenIdsByName.kwdstring]: 14
    },
    simplekind: {
        [tokenIdsByName.id]: 16,
        [tokenIdsByName.kwdint]: 15,
        [tokenIdsByName.kwdfloat]: 15,
        [tokenIdsByName.kwdstring]: 15
    },
    basekind: {
        [tokenIdsByName.kwdint]: 17,
        [tokenIdsByName.kwdfloat]: 18,
        [tokenIdsByName.kwdstring]: 18
    },
    classid: {
        [tokenIdsByName.id]: 20
    },
    varspec: {
        [tokenIdsByName.id]: 22,
        [tokenIdsByName.aster]: 21,
    },
    varspec_: {
        [tokenIdsByName.bracket1]: 24,
        [tokenIdsByName.parens2]: 23,
        [tokenIdsByName.comma]: 23,
        [tokenIdsByName.semi]: 23,
        [tokenIdsByName.equal]: 23
    },
    varid: {
        [tokenIdsByName.id]: 25
    },
    kkwdint: {
        [tokenIdsByName.bracket1]: 26
    },
    deref_id: {
        [tokenIdsByName.aster]: 27
    },
    deref: {
        [tokenIdsByName.aster]: 28
    },
    varinit: {
        [tokenIdsByName.brace1]: 30,
        [tokenIdsByName.parens1]: 29,
        [tokenIdsByName.id]: 29,
        [tokenIdsByName.aster]: 29,
        [tokenIdsByName.ampersand]: 29,
        [tokenIdsByName.int]: 29,
        [tokenIdsByName.float]: 29,
        [tokenIdsByName.string]: 29,
    },
    bbexprs: {
        [tokenIdsByName.brace1]: 31
    },
    bbexprs_: {
        [tokenIdsByName.brace2]: 33,
        [tokenIdsByName.parens1]: 32,
        [tokenIdsByName.id]: 32,
        [tokenIdsByName.ampersand]: 32,
        [tokenIdsByName.int]: 32,
        [tokenIdsByName.float]: 32,
        [tokenIdsByName.string]: 32
    },
    exprlist: {
        [tokenIdsByName.id]: 34,
        [tokenIdsByName.aster]: 34,
        [tokenIdsByName.int]: 34,
        [tokenIdsByName.float]: 34,
        [tokenIdsByName.string]: 34,
        [tokenIdsByName.parens1]: 34
    },
    moreexprs: {
        [tokenIdsByName.brace2]: 36,
        [tokenIdsByName.parens2]: 36,
        [tokenIdsByName.comma]: 35
    },
    classdecl: {
        [tokenIdsByName.brace1]: 37,
        [tokenIdsByName.semi]: 37,
        [tokenIdsByName.colon]: 37,
        [tokenIdsByName.plus]: 37,
        [tokenIdsByName.kwdif]: 37,
        [tokenIdsByName.kwdclass]: 37
    },
    classdef: {
        [tokenIdsByName.kwdclass]: 38
    },
    classdef_: {
        [tokenIdsByName.brace1]: 39,
        [tokenIdsByName.kwdif]: 40
    },
    bbclassitems: {
        [tokenIdsByName.brace1]: 41
    },
    classheader: {
        [tokenIdsByName.kwdclass]: 42
    },
    classmom: {
        [tokenIdsByName.colon]: 43,
        [tokenIdsByName.brace1]: 44,
        [tokenIdsByName.plus]: 44,
        [tokenIdsByName.kwdif]: 44,
        [tokenIdsByName.kwdclass]: 44
    },
    classitems: {
        [tokenIdsByName.brace2]: 46,
        [tokenIdsByName.colon]: 45,
        [tokenIdsByName.kwdvars]: 45,
        [tokenIdsByName.kwdfcn]: 45
    },
    classgroup: {
        [tokenIdsByName.brace2]: 49,
        [tokenIdsByName.colon]: 47,
        [tokenIdsByName.kwdvars]: 48,
        [tokenIdsByName.kwdfcn]: 49
    },
    class_ctrl: {
        [tokenIdsByName.comma]: 50
    },
    interfaces: {
        [tokenIdsByName.brace1]: 52,
        [tokenIdsByName.plus]: 51,
        [tokenIdsByName.kwdif]: 52
    },
    mddecls: {
        [tokenIdsByName.brace2]: 54,
        [tokenIdsByName.kwdfcn]: 53
    },
    mdheader: {
        [tokenIdsByName.kwdfcn]: 55
    },
    md_id: {
        [tokenIdsByName.id]: 56
    },
    fcndefs: {
        [tokenIdsByName.kwdmain]: 58,
        [tokenIdsByName.kwdfcn]: 57
    },
    fcndef: {
        [tokenIdsByName.kwdfcn]: 59
    },
    fcnheader: {
        [tokenIdsByName.kwdfcn]: 60
    },
    fcnid: {
        [tokenIdsByName.id]: 61
    },
    retkind: {
        [tokenIdsByName.kwdint]: 62,
        [tokenIdsByName.kwdfloat]: 62,
        [tokenIdsByName.kwdstring]: 62
    },
    varspecs: {
        [tokenIdsByName.id]: 63,
        [tokenIdsByName.aster]: 63
    },
    more_varspecs: {
        [tokenIdsByName.parens2]: 65,
        [tokenIdsByName.comma]: 64
    },
    stmts: {
        [tokenIdsByName.brace2]: 67,
        [tokenIdsByName.id]: 66,
        [tokenIdsByName.aster]: 66,
        [tokenIdsByName.kwdprint]: 66,
        [tokenIdsByName.kwdif]: 66,
        [tokenIdsByName.kwdwhile]: 66,
        [tokenIdsByName.kwdvars]: 501 //CUSTOM
    },
    stmt: {
        [tokenIdsByName.id]: 68,
        [tokenIdsByName.aster]: 69,
        [tokenIdsByName.kwdprint]: 72,
        [tokenIdsByName.kwdreturn]: 73,
        [tokenIdsByName.kwdif]: 70,
        [tokenIdsByName.kwdwhile]: 71,
    },
    stmt_: {
        [tokenIdsByName.bracket1]: 204,
        [tokenIdsByName.parens1]: 205,
        [tokenIdsByName.semi]: 204, 
    },
    stasgn: {
        [tokenIdsByName.id]: 75,
        [tokenIdsByName.aster]: 77,
    },
    lval: {
        [tokenIdsByName.id]: 75,
        [tokenIdsByName.aster]: 77
    },
    lval_: {
        [tokenIdsByName.bracket1]: 206,
        [tokenIdsByName.bracket2]: 76,
        [tokenIdsByName.brace2]: 76,
        [tokenIdsByName.parens2]: 76,
        [tokenIdsByName.caret]: 76,
        [tokenIdsByName.slash]: 76,
        [tokenIdsByName.aster]: 76,
        [tokenIdsByName.semi]: 76,
        [tokenIdsByName.comma]: 76,
        [tokenIdsByName.plus]: 76,
        [tokenIdsByName.minus]: 76,
        [tokenIdsByName.equal]: 76,
    },
    kkexpr: {
        [tokenIdsByName.bracket1]: 79
    },
    pparmlist: {
        [tokenIdsByName.parens1]: 81
    },
    pparmlist_: {
        [tokenIdsByName.parens2]: 83,
        [tokenIdsByName.id]: 82,
        [tokenIdsByName.aster]: 82
    },
    ppexprs: {
        [tokenIdsByName.parens1]: 84,
    },
    ppexprs_: {
        [tokenIdsByName.parens1]: 85,
        [tokenIdsByName.parens2]: 86,
        [tokenIdsByName.id]: 85,
        [tokenIdsByName.aster]: 85,
        [tokenIdsByName.ampersand]: 85, 
        [tokenIdsByName.int]: 85,
        [tokenIdsByName.float]: 85,
        [tokenIdsByName.string]: 85
    },
    stif: {
        [tokenIdsByName.kwdif]: 87
    },
    elsepart: {
        [tokenIdsByName.semi]: 90,
        [tokenIdsByName.kwdelse]: 89,
        [tokenIdsByName.kwdelseif]: 88
    },
    stwhile: {
        [tokenIdsByName.kwdwhile]: 91
    },
    stprint: {
        [tokenIdsByName.kwdprint]: 92
    },
    strtn: {
        [tokenIdsByName.kwdreturn]: 93
    },
    strtn_: {
        [tokenIdsByName.parens1]: 94,
        [tokenIdsByName.id]: 94,
        [tokenIdsByName.aster]: 94,
        [tokenIdsByName.int]: 94,
        [tokenIdsByName.float]: 94,
        [tokenIdsByName.string]: 94,
        [tokenIdsByName.semi]: 95
    },
    ppexpr: {
        [tokenIdsByName.parens1]: 96
    },
    expr: {
        [tokenIdsByName.parens1]: 97,
        [tokenIdsByName.id]: 97,
        [tokenIdsByName.aster]: 97,
        [tokenIdsByName.int]: 97,
        [tokenIdsByName.float]: 97,
        [tokenIdsByName.string]: 97
    },
    expr_: {
        [tokenIdsByName.bracket2]: 98,
        [tokenIdsByName.brace2]: 98,
        [tokenIdsByName.parens2]: 98,
        [tokenIdsByName.semi]: 98,
        [tokenIdsByName.comma]: 98,
        [tokenIdsByName.angle1]: 99,
        [tokenIdsByName.angle2]: 99,
        [tokenIdsByName.opeq]: 99,
        [tokenIdsByName.opne]: 99,
        [tokenIdsByName.ople]: 99,
        [tokenIdsByName.opge]: 99,
    },
    rterm: {
        [tokenIdsByName.parens1]: 100,
        [tokenIdsByName.id]: 100,
        [tokenIdsByName.aster]: 100,
        [tokenIdsByName.int]: 100,
        [tokenIdsByName.float]: 100,
        [tokenIdsByName.string]: 100
    },
    rterm_: {
        [tokenIdsByName.bracket2]: 101,
        [tokenIdsByName.brace2]: 101,
        [tokenIdsByName.parens2]: 101,
        [tokenIdsByName.comma]: 101,
        [tokenIdsByName.semi]: 101,
        [tokenIdsByName.plus]: 102,
        [tokenIdsByName.minus]: 102,
    },
    term: {
        [tokenIdsByName.parens1]: 103,
        [tokenIdsByName.id]: 103,
        [tokenIdsByName.aster]: 103,
        [tokenIdsByName.int]: 103,
        [tokenIdsByName.float]: 103,
        [tokenIdsByName.string]: 103
    },
    term_: {
        [tokenIdsByName.bracket2]: 104,
        [tokenIdsByName.brace2]: 104,
        [tokenIdsByName.parens2]: 104,
        [tokenIdsByName.comma]: 104,
        [tokenIdsByName.semi]: 104,
        [tokenIdsByName.plus]: 104,
        [tokenIdsByName.minus]: 104,
        [tokenIdsByName.caret]: 105,
        [tokenIdsByName.slash]: 105,
        [tokenIdsByName.aster]: 105,
    },
    fact: {
        [tokenIdsByName.parens1]: 108,
        [tokenIdsByName.id]: 109,
        [tokenIdsByName.ampersand]: 107,
        [tokenIdsByName.int]: 106,
        [tokenIdsByName.float]: 106,
        [tokenIdsByName.string]: 106
    },
    fact_: {
        [tokenIdsByName.bracket1]: 110,
        [tokenIdsByName.bracket2]: 110,
        [tokenIdsByName.brace2]: 110,
        [tokenIdsByName.comma]: 110,
        [tokenIdsByName.caret]: 110,
        [tokenIdsByName.slash]: 110,
        [tokenIdsByName.aster]: 110,
        [tokenIdsByName.parens1]: 111,
        [tokenIdsByName.parens2]: 110,
        [tokenIdsByName.semi]: 110,
        [tokenIdsByName.plus]: 110,
        [tokenIdsByName.minus]: 110,
    },
    baseliteral: {
        [tokenIdsByName.int]: 112,
        [tokenIdsByName.float]: 113,
        [tokenIdsByName.string]: 114
    },
    addrof_id: {
        [tokenIdsByName.ampersand]: 115
    },
    oprel: {
        [tokenIdsByName.angle1]: 118,
        [tokenIdsByName.angle2]: 121,
        [tokenIdsByName.opeq]: 116,
        [tokenIdsByName.opne]: 117,
        [tokenIdsByName.ople]: 119,
        [tokenIdsByName.opge]: 120
    },
    lthan: {
        [tokenIdsByName.angle1]: 122
    },
    gthan: {
        [tokenIdsByName.angle2]: 123
    },
    opadd: {
        [tokenIdsByName.plus]: 124,
        [tokenIdsByName.minus]: 125,
    },
    opmul: {
        [tokenIdsByName.aster]: 126,
        [tokenIdsByName.caret]: 128,
        [tokenIdsByName.slash]: 127
    }
};
