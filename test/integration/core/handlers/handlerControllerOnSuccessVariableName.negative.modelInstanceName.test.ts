import { handlerControllerOnSuccessVariableName } from '../../../../dist';

describe('handlerControllerOnSuccessVariableName', () => {
  describe('negative.modelInstanceName', () => {
    test("should not populate 'accumulator' with a 'controllerOnSuccessVariableName' value (when any of three required fields are not present)", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Delete';
      const modelInstanceName = 'testModel';
      const modelPrimaryKey = `${modelInstanceName}Id`;
      const accumulator = {
        controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelInstanceNameIncorrectKey: modelInstanceName,
        modelPrimaryKey,
      };
      const responseExpected = { ...accumulator };

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
