import { handlerHttpMethodName } from '../../../../dist';

describe('handlerHttpMethodName', () => {
  describe('negative.unknown', () => {
    test("should not populate 'accumulator' with 'httpMethodName' when 'controllerMethodBase' contains an unknown value", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'UnknownValue';
      const accumulator = {
        controllerMethodBase,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const responseExpected = { ...accumulator };

      /*
       * Act
       */
      const responseFound = handlerHttpMethodName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
