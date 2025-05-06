import { handlerIsCreate } from '@app-mt-rvsr/core/handlers';

describe('handlerIsCreate', () => {
  describe('negative', () => {
    test("should populate 'accumulator' with 'isCreate' (as false) when 'controllerMethodNameBase' is unavailable", () => {
      /*
       * Arrange
       */
      const controllerMethodNameBase = 'Create';
      const accumulator = {
        controllerMethodNameBaseIncorrectKey: controllerMethodNameBase,
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
