import { handlerRouterName } from '@app-mt-rvsr/core/handlers';

describe('handlerRouterName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'routerName' when 'routerValidationSchemaName' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerValidationSchemaName = 'testValidationSchemaCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const source = {
        routerValidationSchemaName,
      };
      const routerName = routerValidationSchemaName.replace('ValidationSchema', 'Router');
      const responseExpected = { ...accumulator, routerName };

      /*
       * Act
       */
      const responseFound = handlerRouterName({ accumulator, source });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
