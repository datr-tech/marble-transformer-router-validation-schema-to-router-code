import { handlerControllerFqns } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerFqns', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerFqns' when 'routerValidationSchemaName' is missing (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerValidationSchemaNameIncorrect: 'INCORRECT_KEY',
      };
      const responseExpected = { ...accumulator };

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
