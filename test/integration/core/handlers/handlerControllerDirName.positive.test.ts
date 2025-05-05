/**
 * @module integration/core/handlers
 */
import { handlerControllerDirName } from '../../../../dist';

describe('handlerControllerDirName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' when 'accumulator.modelPrefix' is present (and not alter 'accumulator.distraction')", () => {
      /*
       * Arrange
       */
      const modelPrefix = 'dolomite';
      const accumulator = { modelPrefix, distraction: 'SHOULD_NOT_BE_ALTERED' };
      const controllerDirName = `${modelPrefix}Controller`;
      const responseExpected = { ...accumulator, controllerDirName };

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
