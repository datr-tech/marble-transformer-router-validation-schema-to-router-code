import { handlerHttpMethodName } from '@app-mt-rvsr/core/handlers';

describe('handlerHttpMethodName', () => {
  describe('positive.patch', () => {
    test("should populate 'accumulator' with 'httpMethodName' when 'controllerMethodBase' contains a valid value (of 'Update')", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Update';
      const accumulator = {
        controllerMethodBase,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const httpMethodName = 'patch';
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
