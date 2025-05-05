/**
 * @module integration/core/handlers
 */
import { handlerAppRef } from '../../../../dist';

describe('handlerAppRef', () => {
  describe('positive.proc', () => {
    test("should populate 'accumulator' with an 'appRef' value of '@app-ap2' when 'accumulator.apiName' equals 'proc'", () => {
      /*
       * Arrange
       */
      const accumulator = {
        apiName: 'proc',
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const appRef = '@app-ap2';
      const responseExpected = { ...accumulator, appRef };

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
