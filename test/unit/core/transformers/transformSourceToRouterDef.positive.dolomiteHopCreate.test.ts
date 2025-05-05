import { transformSourceToRouterDef } from '@app-mt-rvsr/core/transformers';

describe('transformSourceToRouterDef', () => {
  describe('positive.dolomiteHopCreate', () => {
    test("should return the expected 'routerDefFound' object", () => {
      /*
       * Arrange
       */
      const apiName = 'dolomite';
      const routerValidationSchemaName = 'hopValidationSchemaCreateHop';
      const source = { apiName, routerValidationSchemaName };
      const routerDefExpected = {
        apiName,
        appRef: '@app-ad',
        routerValidationSchemaName,
        modelPrefix: 'hop',
        modelPrefixUcFirst: 'Hop',
        modelName: 'HopModel',
        modelPrimaryKey: 'hopId',
        modelInstanceName: 'hopModel',
        modelInterfaceName: 'IHopModel',
        controllerName: 'hopControllerCreateHop',
        controllerNameUcFirst: 'HopControllerCreateHop',
        controllerInterfaceName: 'IHopControllerCreateHop',
        controllerDirName: 'hopController',
        controllerMethodName: 'Create',
        controllerOnSuccessVariableName: 'hopId',
        httpMethodName: 'Post',
        routerName: 'hopRouterCreateHop',
        routerNameUcFirst: 'HopRouterCreateHop',
        routerInterfaceName: 'IHopRouterCreateHop',
      };

      /*
       * Act
       */
      const routerDefFound = transformSourceToRouterDef({ source });

      /*
       * Assert
       */
      expect(routerDefFound).toStrictEqual(routerDefExpected);
    });
  });
});
