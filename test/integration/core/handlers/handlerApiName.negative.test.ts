/**
 * @module integration/core/handlers
 */
import { handlerApiName } from '../../../../dist';

describe('handlerApiName', () => {
  describe('negative', () => {
    test("should not alter 'accumulator' when 'source.apiName' could not be found (with 'apiNameIncorrect' used below)", () => {
      /*
       * Arrange
       */
      const source = { apiNameIncorrect: 'TEST_API_NAME' };
      const accumulator = { distraction: 'SHOULD_NOT_BE_ALTERED' };
      const responseExpected = { ...accumulator };

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
