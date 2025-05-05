import { handlerControllerInterfaceName } from '../../../../dist';

describe('handlerControllerInterfaceName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'controllerInterfaceName' when 'controllerFqnsUcFirst' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerFqnsUcFirst = 'TestController';
      const accumulator = {
        controllerFqnsUcFirst,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const controllerInterfaceName = 'I' + controllerFqnsUcFirst;
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
