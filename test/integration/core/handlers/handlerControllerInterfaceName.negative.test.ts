import { handlerControllerInterfaceName } from '../../../../dist';

describe('handlerControllerInterfaceName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerInterfaceName' when 'controllerNameUcFirst' is missing (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerNameUcFirst = 'TestController';
      const accumulator = {
        controllerNameUcFirstIncorrect: controllerNameUcFirst,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerControllerInterfaceName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
