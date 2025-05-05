import { routerTemplatePath } from '@app-mt-rvsr/core/config';
import { transformRouterDefToCode } from '@app-mt-rvsr/core/transformers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

describe('transformRouterDefToCode', () => {
  describe('positive.entityFrameworkRead', () => {
    test("should return the expected 'codeFound' string", () => {
      /*
       * Arrange
       */
      const routerDef = {
        apiName: 'entity',
        appRef: '@app-ae',
        routerValidationSchemaName: 'frameworkValidationSchemaReadFramework',
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
      const codeExpected = fsTemplate.getContentsFromPath(routerTemplatePath, routerDef);

      /*
       * Act
       */
      const codeFound = transformRouterDefToCode({ routerDef });

      /*
       * Assert
       */
      expect(codeExpected).not.toEqual('');
      expect(codeFound).not.toEqual('');
      expect(codeFound).toEqual(codeExpected);
    });
  });
});
