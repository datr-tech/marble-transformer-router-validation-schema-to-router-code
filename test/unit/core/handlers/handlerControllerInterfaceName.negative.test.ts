/**
 * @module unit/core/handlers
 */
import { handlerControllerInterfaceName } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerInterfaceName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'controllerInterfaceName' when 'controllerFqnsUcFirst' is missing (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const controllerFqnsUcFirst = 'TestController';
      const accumulator = {
        controllerFqnsUcFirstIncorrect: controllerFqnsUcFirst,
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
