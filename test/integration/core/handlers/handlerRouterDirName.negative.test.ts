import { handlerRouterDirName } from './../../../../dist';

describe('handlerRouterDirName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'routerDirName' when 'modelPrefix' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'test';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelPrefixIncorrectKey: modelPrefix,
      };
      const responseExpected = { ...accumulator };

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
