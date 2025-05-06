import {
  handlerRouterSrcPath,
  routerExtension,
  routerSrcPathBase,
} from './../../../../dist';

describe('handlerRouterSrcPath', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'routerSrcPath' when 'routerDirName' and 'routerName' are present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerDirName = 'testRouter';
      const routerName = 'testRouterCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        routerDirName,
        routerName,
      };
      const routerSrcPath =
        routerSrcPathBase +
        '/' +
        routerDirName +
        '/' +
        `${routerName}.${routerExtension}`;
      const responseExpected = { ...accumulator, routerSrcPath };

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
