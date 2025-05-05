import { handlerControllerFqnsUcFirst } from '../../../../dist';

describe('handlerControllerFqnsUcFirst', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerFqnsUcFirst' when 'controllerName' is missing (and not alter 'distraction')", () => {
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
      const responseFound = handlerControllerFqnsUcFirst({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
