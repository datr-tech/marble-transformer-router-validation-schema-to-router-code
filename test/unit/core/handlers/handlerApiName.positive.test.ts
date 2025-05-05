/**
 * @module unit/core/handlers
 */
import { handlerApiName } from '@app-mt-rvsr/core/handlers';

describe('handlerApiName', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'source.apiName' and not alter 'accumulator.distraction'", () => {
      /*
       * Arrange
       */
      const source = { apiName: 'TEST_API_NAME' };
      const accumulator = { distraction: 'SHOULD_NOT_BE_ALTERED' };
      const responseExpected = { ...accumulator, ...source };

      /*
       * Act
       */
      const responseFound = handlerApiName({ source, accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
