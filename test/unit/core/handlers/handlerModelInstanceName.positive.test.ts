import { handlerModelInstanceName } from '@app-mt-rvsr/core/handlers';

describe('handlerModelInstanceName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'modelInstanceName' when 'modelPrefix' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'test';
      const accumulator = {
        modelPrefix,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const modelInstanceName = modelPrefix + 'Model';
      const responseExpected = { ...accumulator, modelInstanceName };

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
