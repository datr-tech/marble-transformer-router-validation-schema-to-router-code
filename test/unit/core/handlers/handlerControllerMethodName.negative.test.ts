import { handlerControllerMethodName } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerMethodName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerMethodName' when 'routerValidationSchemaName' is missing (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const accumulator = { distraction: 'SHOULD_NOT_BE_ALTERED' };
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
