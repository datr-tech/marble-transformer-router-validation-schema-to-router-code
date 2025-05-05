import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';
import { routerTemplatePath, transformSourceToCode } from '../../../../dist';

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
        apiName: 'entity',
        appRef: '@app-ae',
        routerValidationSchemaName: 'frameworkValidationSchemaReadFramework',
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
