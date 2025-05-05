import { handlerHttpMethodName } from '@app-mt-rvsr/core/handlers';

describe('handlerHttpMethodName', () => {
  describe('negative.unknown', () => {
    test("should not populate 'accumulator' with 'httpMethodName' when 'controllerMethodName' contains an unknown value", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'UnknownValue';
      const accumulator = {
        controllerMethodName,
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
