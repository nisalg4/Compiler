export interface Token {
    tokenId: number
    startLineNum: number
    endLineNum: number
    startIdx: number
    endIdx: number,
    lineRelativeIdx: number,
    value: string
    numericValue?: number
}
