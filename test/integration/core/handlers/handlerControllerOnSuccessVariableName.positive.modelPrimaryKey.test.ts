import { handlerControllerOnSuccessVariableName } from '../../../../dist';

describe('handlerControllerOnSuccessVariableName', () => {
  describe('positive.modelPrimaryKey', () => {
    test("should populate 'accumulator' with a 'controllerOnSuccessVariableName' value equal to 'modelPrimaryKey' (when 'controllerMethodBase' is not 'Read')", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Delete';
      const modelInstanceName = 'testModel';
      const modelPrimaryKey = `${modelInstanceName}Id`;
      const accumulator = {
        controllerMethodBase,
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
