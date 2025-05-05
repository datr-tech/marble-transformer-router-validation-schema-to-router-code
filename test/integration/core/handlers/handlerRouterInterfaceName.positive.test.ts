import { handlerRouterInterfaceName } from '../../../../dist';

describe('handlerRouterInterfaceName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'routerInterfaceName' when 'routerNameUcFirst' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerNameUcFirst = 'TestRouter';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerNameUcFirst,
      };
      const routerInterfaceName = 'I' + routerNameUcFirst;
      const responseExpected = { ...accumulator, routerInterfaceName };

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
