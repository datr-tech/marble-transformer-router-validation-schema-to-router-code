import { handlerRouterNameUcFirst } from './../../../../dist';

describe('handlerRouterNameUcFirst', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'routerNameUcFirst' when 'routerName' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerName = 'testRouterCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerNameIncorrectKey: routerName,
      };
      const responseExpected = { ...accumulator };

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
