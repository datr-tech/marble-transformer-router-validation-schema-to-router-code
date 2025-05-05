import { handlerRouterNameUcFirst } from '@app-mt-rvsr/core/handlers';

describe('handlerRouterNameUcFirst', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'routerNameUcFirst' when 'routerName' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerName = 'testRouterCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerName,
      };
      const routerNameUcFirst = routerName.charAt(0).toUpperCase() + routerName.slice(1);
      const responseExpected = { ...accumulator, routerNameUcFirst };

      /*
       * Act
       */
      const responseFound = handlerRouterNameUcFirst({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
