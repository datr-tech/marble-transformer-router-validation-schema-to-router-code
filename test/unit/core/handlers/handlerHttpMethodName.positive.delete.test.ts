import { handlerHttpMethodName } from '@app-mt-rvsr/core/handlers';

describe('handlerHttpMethodName', () => {
  describe('positive.delete', () => {
    test("should populate 'accumulator' with 'httpMethodName' when 'controllerMethodBase' contains a valid value (of 'Delete')", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Delete';
      const accumulator = {
        controllerMethodBase,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const httpMethodName = 'delete';
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
