import { handlerModelInstanceName } from '@app-mt-rvsr/core/handlers';

describe('handlerModelInstanceName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'modelInstanceName' when 'modelPrefix' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'test';
      const accumulator = {
        modelPrefixIncorrectKey: modelPrefix,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerModelInstanceName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
