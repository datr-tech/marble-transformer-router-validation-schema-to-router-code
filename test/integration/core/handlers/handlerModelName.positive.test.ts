import { handlerModelName } from '../../../../dist';

describe('handlerModelName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'modelName' when 'modelPrefixUcFirst' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefixUcFirst = 'Test';
      const accumulator = {
        modelPrefixUcFirst,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const modelName = modelPrefixUcFirst + 'Model';
      const responseExpected = { ...accumulator, modelName };

      /*
       * Act
       */
      const responseFound = handlerModelName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
