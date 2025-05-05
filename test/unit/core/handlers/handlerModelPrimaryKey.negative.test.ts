import { handlerModelPrimaryKey } from '@app-mt-rvsr/core/handlers';

describe('handlerModelPrimaryKey', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'modelPrimaryKey' when 'modelPrefix' is unavailable (and not alter 'distraction')", () => {
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
      const responseFound = handlerModelPrimaryKey({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
