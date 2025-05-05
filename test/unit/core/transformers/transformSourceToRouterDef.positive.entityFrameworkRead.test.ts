import { transformSourceToRouterDef } from '@app-mt-rvsr/core/transformers';

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
        controllerName: 'frameworkControllerReadFramework',
        controllerNameUcFirst: 'FrameworkControllerReadFramework',
        controllerInterfaceName: 'IFrameworkControllerReadFramework',
        controllerDirName: 'frameworkController',
        controllerMethodName: 'Read',
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
