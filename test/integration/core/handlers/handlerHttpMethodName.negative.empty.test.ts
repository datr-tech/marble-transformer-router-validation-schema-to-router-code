import { handlerHttpMethodName } from '../../../../dist';

describe('handlerHttpMethodName', () => {
  describe('negative.empty', () => {
    test("should not populate 'accumulator' with 'httpMethodName' when 'controllerMethodBase' is not present", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'UnknownValue';
      const accumulator = {
        controllerMethodBaseIncorrectKey: controllerMethodBase,
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
