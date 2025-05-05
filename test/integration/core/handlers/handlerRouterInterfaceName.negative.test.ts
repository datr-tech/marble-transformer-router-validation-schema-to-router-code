import { handlerRouterInterfaceName } from '../../../../dist';

describe('handlerRouterInterfaceName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'routerInterfaceName' when 'routerNameUcFirst' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerNameUcFirst = 'TestRouter';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerNameUcFirstIncorrectKey: routerNameUcFirst,
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerRouterInterfaceName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
