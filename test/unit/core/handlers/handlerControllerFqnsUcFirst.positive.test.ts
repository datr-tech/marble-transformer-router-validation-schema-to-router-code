import { handlerControllerFqnsUcFirst } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerFqnsUcFirst', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerFqnsUcFirst' when 'controllerFqns' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerFqns = `testControllerCreateTest`;
      const accumulator = {
        controllerFqns,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerFqnsUcFirst =
        controllerFqns.charAt(0).toUpperCase() + controllerFqns.slice(1);
      const responseExpected = { ...accumulator, controllerFqnsUcFirst };

      /*
       * Act
       */
      const responseFound = handlerControllerFqnsUcFirst({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
