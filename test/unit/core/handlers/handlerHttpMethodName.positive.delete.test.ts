import { handlerHttpMethodName } from '@app-mt-rvsr/core/handlers';

describe('handlerHttpMethodName', () => {
  describe('positive.delete', () => {
    test("should populate 'accumulator' with 'httpMethodName' when 'controllerMethodName' contains a valid value (of 'Delete')", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Delete';
      const accumulator = {
        controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const httpMethodName = 'Delete';
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
