import { handlerControllerNameUcFirst } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerNameUcFirst', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerNameUcFirst' when 'controllerName' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerName = `testControllerCreateTest`;
      const accumulator = {
        controllerName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerNameUcFirst =
        controllerName.charAt(0).toUpperCase() + controllerName.slice(1);
      const responseExpected = { ...accumulator, controllerNameUcFirst };

      /*
       * Act
       */
      const responseFound = handlerControllerNameUcFirst({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
