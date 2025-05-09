import { handlerHttpMethodName } from '@app-mt-rvsr/core/handlers';

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
      const httpMethodName = 'post';
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
