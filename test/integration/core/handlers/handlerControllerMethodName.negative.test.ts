import { handlerControllerMethodName } from '../../../../dist';

describe('handlerControllerMethodName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerMethodName' when either 'controllerMethodBase' or 'modelPrefixUcFirst' (or both) are missing (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Create';
      const modelPrefixUcFirst = 'Test';
      const accumulator = {
        controllerMethodBaseIncorrectKey: controllerMethodBase,
        modelPrefixUcFirst,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

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
