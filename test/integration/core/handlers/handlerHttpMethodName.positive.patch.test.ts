import { handlerHttpMethodName } from '../../../../dist';

describe('handlerHttpMethodName', () => {
  describe('positive.patch', () => {
    test("should populate 'accumulator' with 'httpMethodName' when 'controllerMethodName' contains a valid value (of 'Update')", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Update';
      const accumulator = {
        controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const httpMethodName = 'Patch';
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
