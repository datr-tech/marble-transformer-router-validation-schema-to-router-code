import { handlerHttpMethodName } from '../../../../dist';

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
