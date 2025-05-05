import { handlerControllerOnSuccessVariableName } from '@app-mt-rvsr/core/handlers';

describe('handlerControllerOnSuccessVariableName', () => {
  describe('positive.modelPrimaryKey', () => {
    test("should populate 'accumulator' with a 'controllerOnSuccessVariableName' value equal to 'modelPrimaryKey' (when 'controllerMethodName' is not 'Read')", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Delete';
      const modelInstanceName = 'testModel';
      const modelPrimaryKey = `${modelInstanceName}Id`;
      const accumulator = {
        controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelInstanceName,
        modelPrimaryKey,
      };
      const controllerOnSuccessVariableName = modelPrimaryKey;
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
