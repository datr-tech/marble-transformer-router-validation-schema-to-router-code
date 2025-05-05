import { handlerControllerMethodBase } from '../../../../dist';

describe('handlerControllerMethodBase', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerMethodBase' when 'routerValidationSchemaName' is missing (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const accumulator = { distraction: 'SHOULD_NOT_BE_ALTERED' };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerControllerMethodBase({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
