import { handlerControllerNameUcFirst } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerNameUcFirst', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerNameUcFirst' when 'controllerName' is missing (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerName = `testControllerCreateTest`;
      const accumulator = {
        controllerNameIncorrectKey: controllerName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

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
