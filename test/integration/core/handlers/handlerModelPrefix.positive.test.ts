import { handlerModelPrefix } from './../../../../dist';

describe('handlerModelPrefix', () => {
  describe('positive', () => {
    test("should populate 'accumulator' with 'modelPrefix' when 'routerValidationSchemaName' is present with a valid value(and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerValidationSchemaName = 'testValidationSchemaCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const source = {
        routerValidationSchemaName,
      };
      const modelPrefix = routerValidationSchemaName.split('ValidationSchema')[0];
      const responseExpected = { ...accumulator, modelPrefix };

      /*
       * Act
       */
      const responseFound = handlerModelPrefix({ accumulator, source });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
