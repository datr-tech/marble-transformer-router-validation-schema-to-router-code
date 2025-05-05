import { handlerControllerOnSuccessVariableName } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerOnSuccessVariableName', () => {
  describe('positive.modelInstanceName', () => {
    test("should populate 'accumulator' with a 'controllerOnSuccessVariableName' value equal to 'modelInstanceName' (when 'controllerMethodName' is 'Read')", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Read';
      const modelInstanceName = 'testModel';
      const modelPrimaryKey = `${modelInstanceName}Id`;
      const accumulator = {
        controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelInstanceName,
        modelPrimaryKey,
      };
      const controllerOnSuccessVariableName = modelInstanceName;
      const responseExpected = { ...accumulator, controllerOnSuccessVariableName };

      /*
       * Act
       */
      const responseFound = handlerControllerOnSuccessVariableName({ accumulator });

      /*
       * Assert
       */
      expect(responseFound).toStrictEqual(responseExpected);
    });
  });
});
