import { handlerHttpMethodName } from '../../../../dist';

describe('handlerHttpMethodName', () => {
  describe('positive.post', () => {
    test("should populate 'accumulator' with 'httpMethodName' when 'controllerMethodBase' contains a valid value", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Create';
      const accumulator = {
        controllerMethodBase,
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
