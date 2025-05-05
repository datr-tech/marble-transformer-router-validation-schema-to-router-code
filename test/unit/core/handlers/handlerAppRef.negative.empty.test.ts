/**
 * @module unit/core/handlers
 */
import { handlerAppRef } from '@app-mt-rvsr/core/handlers';

describe('handlerAppRef', () => {
  describe('negative.empty', () => {
    test("should not populate 'accumulator' with an 'appRef' when 'accumulator.apiName' is empty", () => {
      /*
       * Arrange
       */
      const accumulator = {
        apiName: '',
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerAppRef({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
