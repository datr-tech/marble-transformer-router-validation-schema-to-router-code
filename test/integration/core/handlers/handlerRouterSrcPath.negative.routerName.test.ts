import { handlerRouterSrcPath } from './../../../../dist';

describe('handlerRouterSrcPath', () => {
  describe('negative.routerName', () => {
    test("should populate 'accumulator' with 'routerSrcPath' when 'routerName' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerDirName = 'testRouter';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerDirName,
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
