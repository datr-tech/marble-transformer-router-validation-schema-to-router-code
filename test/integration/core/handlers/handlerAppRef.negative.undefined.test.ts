/**
 * @module integration/core/handlers
 */
import { handlerAppRef } from './../../../../dist';

describe('handlerAppRef', () => {
  describe('negative.undefined', () => {
    test("should not populate 'accumulator' with an 'appRef' value when 'accumulator.apiName' is undefined", () => {
      /*
       * Arrange
       */
      const accumulator = {
        apiNameIncorrect: 'test',
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
