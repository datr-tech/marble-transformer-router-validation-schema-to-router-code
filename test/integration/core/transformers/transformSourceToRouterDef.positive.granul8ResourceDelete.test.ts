import { transformSourceToRouterDef } from '../../../../dist';

describe('transformSourceToRouterDef', () => {
  describe('positive.granul8ResourceDelete', () => {
    test("should return the expected 'routerDefFound' object", () => {
      /*
       * Arrange
       */
      const apiName = 'granul8';
      const routerValidationSchemaName = 'resourceValidationSchemaDeleteResource';
      const source = { apiName, routerValidationSchemaName };
      const routerDefExpected = {
        apiName,
        appRef: '@app-ag',
        routerValidationSchemaName,
        modelPrefix: 'resource',
        modelPrefixUcFirst: 'Resource',
        modelName: 'ResourceModel',
        modelPrimaryKey: 'resourceId',
        modelInstanceName: 'resourceModel',
        modelInterfaceName: 'IResourceModel',
        controllerName: 'resourceControllerDeleteResource',
        controllerNameUcFirst: 'ResourceControllerDeleteResource',
        controllerInterfaceName: 'IResourceControllerDeleteResource',
        controllerDirName: 'resourceController',
        controllerMethodName: 'Delete',
        controllerOnSuccessVariableName: 'resourceId',
        httpMethodName: 'Delete',
        routerName: 'resourceRouterDeleteResource',
        routerNameUcFirst: 'ResourceRouterDeleteResource',
        routerInterfaceName: 'IResourceRouterDeleteResource',
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
