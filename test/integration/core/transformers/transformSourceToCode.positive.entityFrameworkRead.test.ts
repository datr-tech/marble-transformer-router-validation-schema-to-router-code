import { routerTemplatePath } from '@app-mt-rvsr/core/config';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';
import { transformSourceToCode } from '../../../../dist';

describe('transformSourceToCode', () => {
  describe('positive.dolomiteHopCreate', () => {
    test("should return the expected 'codeFound' string", () => {
      /*
       * Arrange
       */
      const apiName = 'entity';
      const routerValidationSchemaName = 'frameworkValidationSchemaReadFramework';
      const source = { apiName, routerValidationSchemaName };
      const routerDef = {
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
      const codeExpected = fsTemplate.getContentsFromPath(routerTemplatePath, routerDef);

      /*
       * Act
       */
      const codeFound = transformSourceToCode(source);

      /*
       * Assert
       */
      expect(codeExpected).not.toEqual('');
      expect(codeFound).not.toEqual('');
      expect(codeFound).toEqual(codeExpected);
    });
  });
});
