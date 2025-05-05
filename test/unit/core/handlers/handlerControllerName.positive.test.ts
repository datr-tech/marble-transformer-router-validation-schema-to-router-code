import { handlerControllerName } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerName' when 'routerValidationSchemaName' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerValidationSchemaName = `testValidationSchemaCreateTest`;
      const accumulator = {
        routerValidationSchemaName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerName = routerValidationSchemaName.replace(
        'ValidationSchema',
        'Controller',
      );
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
