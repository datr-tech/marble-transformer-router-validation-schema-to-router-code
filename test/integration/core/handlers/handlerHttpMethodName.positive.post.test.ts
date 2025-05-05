import { handlerHttpMethodName } from '../../../../dist';

describe('handlerHttpMethodName', () => {
  describe('positive.post', () => {
    test("should populate 'accumulator' with 'httpMethodName' when 'controllerMethodName' contains a valid value", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Create';
      const accumulator = {
        controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const httpMethodName = 'Post';
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
