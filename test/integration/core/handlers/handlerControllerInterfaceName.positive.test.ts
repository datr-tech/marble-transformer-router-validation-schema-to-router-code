import { handlerControllerInterfaceName } from '../../../../dist';

describe('handlerControllerInterfaceName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerInterfaceName' when 'controllerNameUcFirst' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerNameUcFirst = 'TestController';
      const accumulator = {
        controllerNameUcFirst,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerInterfaceName = 'I' + controllerNameUcFirst;
      const responseExpected = { ...accumulator, controllerInterfaceName };

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
