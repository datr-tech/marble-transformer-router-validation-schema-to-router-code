import { handlerRouterDirName } from '@app-mt-rvsr/core/handlers';

describe('handlerRouterDirName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'routerDirName' when 'modelPrefix' is present (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'test';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelPrefix,
      };
      const routerDirName = modelPrefix + 'Router';
      const responseExpected = { ...accumulator, routerDirName };

      /*
       * Act
       */
      const responseFound = handlerRouterDirName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
