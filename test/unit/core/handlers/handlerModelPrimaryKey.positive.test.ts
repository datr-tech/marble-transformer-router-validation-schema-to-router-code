import { handlerModelPrimaryKey } from '@app-mt-rvsr/core/handlers';

describe('handlerModelPrimaryKey', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'modelPrimaryKey' when 'modelPrefix' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'test';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelPrefix,
      };
      const modelPrimaryKey = modelPrefix + 'Id';
      const responseExpected = { ...accumulator, modelPrimaryKey };

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
