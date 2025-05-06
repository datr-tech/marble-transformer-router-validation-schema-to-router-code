import { handlerControllerName } from './../../../../dist';

describe('handlerControllerName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerName' when 'modelPrefix' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = `test`;
      const accumulator = {
        modelPrefixIncorrectKey: modelPrefix,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerControllerName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
