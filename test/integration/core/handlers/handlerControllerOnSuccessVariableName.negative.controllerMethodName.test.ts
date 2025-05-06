import { handlerControllerOnSuccessVariableName } from './../../../../dist';

describe('handlerControllerOnSuccessVariableName', () => {
  describe('negative.controllerMethodBase', () => {
    test("should not populate 'accumulator' with a 'controllerOnSuccessVariableName' value (when any of three required fields are not present)", () => {
      /*
       * Arrange
       */
      const controllerMethodBase = 'Read';
      const modelInstanceName = 'testModel';
      const modelPrimaryKey = `${modelInstanceName}Id`;
      const accumulator = {
        controllerMethodBaseIncorrectKey: controllerMethodBase,
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
