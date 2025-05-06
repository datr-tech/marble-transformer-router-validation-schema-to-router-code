import { handlerControllerName } from './../../../../dist';

describe('handlerControllerName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerName' when 'modelPrefix' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = `test`;
      const accumulator = {
        modelPrefix,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerName = modelPrefix + 'Controller';
      const responseExpected = { ...accumulator, controllerName };

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
