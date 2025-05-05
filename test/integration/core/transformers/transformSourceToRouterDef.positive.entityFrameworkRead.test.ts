import { transformSourceToRouterDef } from '../../../../dist';

describe('transformSourceToRouterDef', () => {
  describe('positive.entityFrameworkRead', () => {
    test("should return the expected 'routerDefFound' object", () => {
      /*
       * Arrange
       */
      const apiName = 'entity';
      const routerValidationSchemaName = 'frameworkValidationSchemaReadFramework';
      const source = { apiName, routerValidationSchemaName };
      const routerDefExpected = {
        apiName,
        appRef: '@app-ae',
        routerValidationSchemaName,
        modelPrefix: 'framework',
        modelPrefixUcFirst: 'Framework',
        modelName: 'FrameworkModel',
        modelPrimaryKey: 'frameworkId',
        modelInstanceName: 'frameworkModel',
        modelInterfaceName: 'IFrameworkModel',
        controllerName: 'frameworkController',
        controllerFqns: 'frameworkControllerReadFramework',
        controllerFqnsUcFirst: 'FrameworkControllerReadFramework',
        controllerInterfaceName: 'IFrameworkControllerReadFramework',
        controllerDirName: 'frameworkController',
        controllerMethodBase: 'Read',
        controllerMethodName: 'readFramework',
        controllerOnSuccessVariableName: 'frameworkModel',
        httpMethodName: 'Get',
        routerName: 'frameworkRouterReadFramework',
        routerNameUcFirst: 'FrameworkRouterReadFramework',
        routerInterfaceName: 'IFrameworkRouterReadFramework',
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
