import { handlerHttpMethodName } from '../../../../dist';

describe('handlerHttpMethodName', () => {
  describe('negative.empty', () => {
    test("should not populate 'accumulator' with 'httpMethodName' when 'controllerMethodName' is not present", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'UnknownValue';
      const accumulator = {
        controllerMethodNameIncorrectKey: controllerMethodName,
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
