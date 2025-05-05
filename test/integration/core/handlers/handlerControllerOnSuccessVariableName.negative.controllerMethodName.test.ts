import { handlerControllerOnSuccessVariableName } from '../../../../dist';

describe('handlerControllerOnSuccessVariableName', () => {
  describe('negative.controllerMethodName', () => {
    test("should not populate 'accumulator' with a 'controllerOnSuccessVariableName' value (when any of three required fields are not present)", () => {
      /*
       * Arrange
       */
      const controllerMethodName = 'Read';
      const modelInstanceName = 'testModel';
      const modelPrimaryKey = `${modelInstanceName}Id`;
      const accumulator = {
        controllerMethodNameIncorrectKey: controllerMethodName,
        distraction: 'SHOULD_NOT_BE_ALTERED',
        modelInstanceName,
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
