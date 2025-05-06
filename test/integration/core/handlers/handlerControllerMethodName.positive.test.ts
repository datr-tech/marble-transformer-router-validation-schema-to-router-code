import { handlerControllerMethodName } from './../../../../dist';

describe('handlerControllerMethodName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerMethodName' when 'controllerMethodBase' and 'modelPrefixUcFirst' are present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Create';
      const modelPrefixUcFirst = 'Test';
      const accumulator = {
        controllerMethodBase,
        modelPrefixUcFirst,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerMethodName = 'createTest';
      const responseExpected = { ...accumulator, controllerMethodName };

      /*
       * Act
       */
      const responseFound = handlerControllerMethodName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
