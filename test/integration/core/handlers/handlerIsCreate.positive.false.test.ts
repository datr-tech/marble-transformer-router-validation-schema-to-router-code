import { handlerIsCreate } from './../../../../dist';

describe('handlerIsCreate', () => {
  describe('positive.false', () => {
    test("should populate 'accumulator' with 'isCreate' (as false) when 'httpMethodName' is present and equal to 'delete'", () => {
      /*
       * Arrange
       */
      const httpMethodName = 'delete';
      const accumulator = {
        httpMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
      };
      const isCreate = false;
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
