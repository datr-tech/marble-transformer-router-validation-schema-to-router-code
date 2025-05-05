/**
 * @module integration/core/handlers
 */
import { handlerControllerDirName } from '../../../../dist';

describe('handlerControllerDirName', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' when 'accumulator.modelPrefix' is undefined", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'dolomite';
      const accumulator = {
        modelPrefixIncorrect: modelPrefix,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerControllerDirName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
