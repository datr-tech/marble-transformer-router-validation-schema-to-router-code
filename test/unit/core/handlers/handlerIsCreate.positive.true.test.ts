import { handlerIsCreate } from '@app-mt-rvsr/core/handlers';

describe('handlerIsCreate', () => {
  describe('positive.true', () => {
    test("should populate 'accumulator' with 'isCreate' (as true) when 'httpMethodName' is present and equal to 'Create'", () => {
      /*
       * Arrange
       */
      const httpMethodName = 'post';
      const accumulator = {
        httpMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const isCreate = true;
      const responseExpected = { ...accumulator, isCreate };

      /*
       * Act
       */
      const responseFound = handlerIsCreate({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
