import { handlerControllerFqns } from '../../../../dist';

describe('handlerControllerFqns', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerFqns' when 'routerValidationSchemaName' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerValidationSchemaName = `testValidationSchemaCreateTest`;
      const accumulator = {
        routerValidationSchemaName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerFqns = routerValidationSchemaName.replace(
        'ValidationSchema',
        'Controller',
      );
      const responseExpected = { ...accumulator, controllerFqns };

      /*
       * Act
       */
      const responseFound = handlerControllerFqns({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
