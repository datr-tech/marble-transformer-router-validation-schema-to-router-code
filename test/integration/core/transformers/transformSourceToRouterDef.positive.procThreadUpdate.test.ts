import { transformSourceToRouterDef } from '../../../../dist';

describe('transformSourceToRouterDef', () => {
  describe('positive.procThreadUpdate', () => {
    test("should return the expected 'routerDefFound' object", () => {
      /*
       * Arrange
       */
      const apiName = 'proc';
      const routerValidationSchemaName = 'threadValidationSchemaUpdateThread';
      const source = { apiName, routerValidationSchemaName };
      const routerDefExpected = {
        apiName,
        appRef: '@app-ap2',
        routerValidationSchemaName,
        modelPrefix: 'thread',
        modelPrefixUcFirst: 'Thread',
        modelName: 'ThreadModel',
        modelPrimaryKey: 'threadId',
        modelInstanceName: 'threadModel',
        modelInterfaceName: 'IThreadModel',
        controllerName: 'threadController',
        controllerFqns: 'threadControllerUpdateThread',
        controllerFqnsUcFirst: 'ThreadControllerUpdateThread',
        controllerInterfaceName: 'IThreadControllerUpdateThread',
        controllerDirName: 'threadController',
        controllerMethodBase: 'Update',
        controllerMethodName: 'updateThread',
        controllerOnSuccessVariableName: 'threadId',
        httpMethodName: 'Patch',
        routerName: 'threadRouterUpdateThread',
        routerNameUcFirst: 'ThreadRouterUpdateThread',
        routerInterfaceName: 'IThreadRouterUpdateThread',
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
