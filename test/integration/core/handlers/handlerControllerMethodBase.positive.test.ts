import { handlerControllerMethodBase } from '../../../../dist';

describe('handlerControllerMethodBase', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerMethodBase' when 'routerValidationSchemaName' contains one of the pre-defined method names (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Create';
      const routerValidationSchemaName = `testRouterValidationSchema${controllerMethodBase}Test`;
      const accumulator = {
        routerValidationSchemaName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator, controllerMethodBase };

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
