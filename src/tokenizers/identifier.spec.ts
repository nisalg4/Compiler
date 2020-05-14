import * as errorHandlers from '../utils/errorHandlers';

import { tokenizeIdentifier } from './identifier';

describe("identifier tokenizer", () => {
  describe("tokenizeIdentifier", () => {
    beforeEach(() => {
      jest.spyOn(errorHandlers, 'syntaxError')
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })
   
    it.each`
    source       | id   
    ${"prog"}    | ${10}
    ${"main"}    | ${11}
    ${"fcn"}     | ${12}
    ${"class"}   | ${13}
    ${"float"}   | ${15}
    ${"int"}     | ${16}
    ${"string"}  | ${17}
    ${"if"}      | ${18}
    ${"elseif"}  | ${19}
    ${"else"}    | ${20}
    ${"while"}   | ${21}
    ${"input"}   | ${22}
    ${"print"}   | ${23}
    ${"new"}     | ${24}
    ${"return"}  | ${25}
    ${"var"}     | ${26}
    ${"_abcdef"}  | ${2} 
    `("generates a token for the sequence: $source", ({source, id}) => {
      const lineNum = 1; 
      const index = 0;
      const lineRelativeIdx = 0;

      const token = tokenizeIdentifier(source, lineNum, index, lineRelativeIdx);

      expect(token).not.toBeNull();
      expect(token.tokenId).toEqual(id);
      expect(token.startLineNum).toEqual(lineNum);
      expect(token.endLineNum).toEqual(lineNum);
      expect(token.lineRelativeIdx).toEqual(lineRelativeIdx);
      expect(token.startIdx).toEqual(index);
      expect(token.endIdx).toEqual(source.length - 1);
      expect(token.value).toEqual(source.toString());
      expect(errorHandlers.syntaxError).not.toHaveBeenCalled();
    });

    it("generates an error for strings that start with an invalid character", () => {
      const source = `%sdfa`;
      const lineNum = 1;
      const index = 0;
      const lineRelativeIdx = 0;
      
      expect.assertions(1);
      try {
        tokenizeIdentifier(source, lineNum, index, lineRelativeIdx);
      } catch (e) {
        expect(errorHandlers.syntaxError).toHaveBeenCalled();
      }  

    });

  });
});
