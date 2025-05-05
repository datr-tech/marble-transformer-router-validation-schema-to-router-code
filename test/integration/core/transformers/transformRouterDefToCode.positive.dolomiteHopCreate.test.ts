import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';
import { routerTemplatePath, transformRouterDefToCode } from '../../../../dist';

describe('transformRouterDefToCode', () => {
  describe('positive.dolomiteHopCreate', () => {
    test("should return the expected 'codeFound' string", () => {
      /*
       * Arrange
       */
      const routerDef = {
        apiName: 'dolomite',
        appRef: '@app-ad',
        routerValidationSchemaName: 'hopValidationSchemaCreateHop',
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
