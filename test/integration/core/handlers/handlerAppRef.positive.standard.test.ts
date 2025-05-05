import { handlerAppRef } from '../../../../dist';

describe('handlerAppRef', () => {
  describe('positive.standard', () => {
    test("should populate 'accumulator' with 'appRef' when 'accumulator.apiName' has a standard form", () => {
      /*
       * Arrange
       */
      const accumulator = {
        apiName: 'test',
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const appRef = '@app-at';
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
