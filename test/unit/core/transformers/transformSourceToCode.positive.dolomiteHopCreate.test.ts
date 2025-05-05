import { routerTemplatePath } from '@app-mt-rvsr/core/config';
import { transformSourceToCode } from '@app-mt-rvsr/core/transformers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

describe('transformSourceToCode', () => {
  describe('positive.dolomiteHopCreate', () => {
    test("should return the expected 'codeFound' string", () => {
      /*
       * Arrange
       */
      const apiName = 'dolomite';
      const routerValidationSchemaName = 'hopValidationSchemaCreateHop';
      const source = { apiName, routerValidationSchemaName };
      const routerDef = {
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
