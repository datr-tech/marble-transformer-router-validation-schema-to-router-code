import { handlerRouterSrcPath } from './../../../../dist';

describe('handlerRouterSrcPath', () => {
  describe('negative.routerDirName', () => {
    test("should populate 'accumulator' with 'routerSrcPath' when 'routerDirName' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerName = 'testRouterCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerName,
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerRouterSrcPath({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
