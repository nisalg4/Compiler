import * as errorHandlers from '../utils/errorHandlers';

import { tokenizeNumber } from './number';

describe("number tokenizer", () => {
  describe("tokenizeNumber", () => {
    beforeEach(() => {
      jest.spyOn(errorHandlers, 'syntaxError')
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it.each`
      source        | index | endIdx | id    | value 
      ${'src295'}   | ${3}  | ${5}   | ${3}  | ${295}
      ${'src 0'}    | ${4}  | ${4}   | ${3}  | ${0}
      ${'src  .5'}  | ${5}  | ${6}   | ${4}  | ${.5}
      ${'src 7.78'} | ${4}  | ${7}   | ${4}  | ${7.78}
    `("generates a token for the number: $value", ({source, index, endIdx, id, value}) => {
     
      const lineNum = 14; // Any line num
      const lineRelativeIdx = 4;

      const token = tokenizeNumber(source, lineNum, index, lineRelativeIdx);

      expect(token).not.toBeNull();
      expect(token.tokenId).toEqual(id);
      expect(token.startLineNum).toEqual(lineNum);
      expect(token.endLineNum).toEqual(lineNum);
      expect(token.lineRelativeIdx).toEqual(lineRelativeIdx);
      expect(token.startIdx).toEqual(index);
      expect(token.endIdx).toEqual(endIdx);
      expect(parseFloat(token.value)).toEqual(value);
      expect(token.numericValue).toEqual(value);
      expect(errorHandlers.syntaxError).not.toHaveBeenCalled();
    });

    it("generates an error for invalid numbers", () => {
      const source = `src 205..2`;
      const lineNum = 14;
      const index = 4;
      const lineRelativeIdx = 4;

      expect.assertions(1);
      try {
        tokenizeNumber(source, lineNum, index, lineRelativeIdx);
      } catch (e) {
        expect(errorHandlers.syntaxError).toHaveBeenCalled();
      }  

    });
  });
})
