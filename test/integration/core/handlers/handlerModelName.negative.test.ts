import { handlerModelName } from '../../../../dist';

describe('handlerModelName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'modelName' when 'modelPrefixUcFirst' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefixUcFirst = 'Test';
      const accumulator = {
        modelPrefixUcFirstIncorrectKey: modelPrefixUcFirst,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

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
