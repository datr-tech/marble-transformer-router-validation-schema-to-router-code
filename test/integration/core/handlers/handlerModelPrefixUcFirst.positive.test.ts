import { handlerModelPrefixUcFirst } from '../../../../dist';

describe('handlerModelPrefixUcFirst', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'modelPrefixUcFirst' when 'modelPrefix' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'test';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelPrefix,
      };
      const modelPrefixUcFirst =
        modelPrefix.charAt(0).toUpperCase() + modelPrefix.slice(1);
      const responseExpected = { ...accumulator, modelPrefixUcFirst };

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
