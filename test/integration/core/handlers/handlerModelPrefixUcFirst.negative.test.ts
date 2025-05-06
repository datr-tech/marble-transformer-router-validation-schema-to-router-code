import { handlerModelPrefixUcFirst } from './../../../../dist';

describe('handlerModelPrefixUcFirst', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'modelPrefixUcFirst' when 'modelPrefix' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'test';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelPrefixIncorrectKey: modelPrefix,
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerModelPrefixUcFirst({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
