import { handlerRouterValidationSchemaName } from '@app-mt-rvsr/core/handlers';

describe('handlerRouterValidationSchemaName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'routerValidationSchemaName' (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerValidationSchemaName = 'testValidationSchemaCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const source = {
        routerValidationSchemaNameIncorrectKey: routerValidationSchemaName,
      };
      const responseExpected = { ...accumulator };

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
