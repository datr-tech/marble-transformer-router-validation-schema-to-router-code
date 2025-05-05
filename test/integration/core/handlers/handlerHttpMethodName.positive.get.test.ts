import { handlerHttpMethodName } from '../../../../dist';

describe('handlerHttpMethodName', () => {
  describe('positive.get', () => {
    test("should populate 'accumulator' with 'httpMethodName' when 'controllerMethodName' contains a valid value (of 'Read')", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Read';
      const accumulator = {
        controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const httpMethodName = 'Get';
      const responseExpected = { ...accumulator, httpMethodName };

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
