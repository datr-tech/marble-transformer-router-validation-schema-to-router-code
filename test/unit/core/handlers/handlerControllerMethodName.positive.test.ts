import { handlerControllerMethodName } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerMethodName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerMethodName' when 'routerValidationSchemaName' contains one of the pre-defined method names (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Create';
      const routerValidationSchemaName = `testRouterValidationSchema${controllerMethodName}Test`;
      const accumulator = {
        routerValidationSchemaName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
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
