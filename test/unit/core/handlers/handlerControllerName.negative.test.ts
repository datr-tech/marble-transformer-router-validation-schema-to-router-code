import { handlerControllerName } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerName' when 'routerValidationSchemaName' is missing (and not alter 'distraction')", () => {
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
      const responseFound = handlerControllerName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
