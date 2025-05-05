import { routerTemplatePath } from '@app-mt-rvsr/core/config';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';
import { transformSourceToCode } from '../../../../dist';

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
        controllerName: 'hopController',
        controllerFqns: 'hopControllerCreateHop',
        controllerFqnsUcFirst: 'HopControllerCreateHop',
        controllerInterfaceName: 'IHopControllerCreateHop',
        controllerDirName: 'hopController',
        controllerMethodBase: 'Create',
        controllerMethodName: 'createHop',
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
