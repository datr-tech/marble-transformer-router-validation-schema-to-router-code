import { handlerModelPrefix } from '../../../../dist';

describe('handlerModelPrefix', () => {
  describe('negative', () => {
    test("should not populate 'accumulator' with 'modelPrefix' when 'routerValidationSchemaName' is unavailable (and not alter 'distraction')", () => {
      /*
       * Arrange
       */
      const routerValidationSchemaName = 'testValidationSchemaCreateTest';
      const accumulator = {
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const source = {
        routerValidationSchemaNameIncorrectKey: routerValidationSchemaName,
      };
      const responseExpected = { ...accumulator };

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
