import { handlerRouterName } from '../../../../dist';

describe('handlerRouterName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'routerName' when 'routerValidationSchemaName' is unavailable (and not alter 'distraction')", () => {
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
      const responseFound = handlerRouterName({ accumulator, source });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
