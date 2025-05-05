import { handlerRouterValidationSchemaName } from '@app-mt-rvsr/core/handlers';

describe('handlerRouterValidationSchemaName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'routerValidationSchemaName' (and not alter 'distraction')", () => {
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
      const responseExpected = { ...accumulator, routerValidationSchemaName };

      /*
       * Act
       */
      const responseFound = handlerRouterValidationSchemaName({ accumulator, source });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
