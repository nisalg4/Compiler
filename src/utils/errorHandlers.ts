interface SyntaxErrorDetails {
    lineNum: number
    charIdx: number
}

// Syntax error class so that we can store additional details
class SyntaxError extends Error {
    details: SyntaxErrorDetails;

    constructor(message: string, details: SyntaxErrorDetails) {
        super(message);
        Object.setPrototypeOf(this, SyntaxError.prototype);
        this.details = details;
    }
}

// Throws a syntax error to console with captured reason and position details
export const syntaxError = (reason: string, lineNum: number, charIdx: number) => {
    const details = {
        lineNum,
        charIdx
    };

    throw new SyntaxError(reason, details);
}
