import { tokenizeComment } from './comment';

describe("comment tokenizer", () => {
  describe("tokenizeComment", () => {
    it.each`
      source               | index
      ${'// hello it me'}   | ${0}
      ${' //itbe//yaboi/'}  | ${1}
    `("generates a token for the comment: $source", ({source, index}) => {
     
      const token = tokenizeComment(source, 0, index, 0);

      expect(token).not.toBeNull();
      expect(token.tokenId).toEqual(1);
      expect(token.startIdx).toEqual(index);
      expect(token.endIdx).toEqual(source.length - 1);
    });

  });
})
