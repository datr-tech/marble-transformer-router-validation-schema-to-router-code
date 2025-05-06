import { transformSourceToRouterDef } from '@app-mt-rvsr/core/transformers';
import { ITransformSourceToRouterDefInput } from '@app-mt-rvsr/interfaces/core/transformers';
import { transformSourceToRouterDefFixture } from '@test-mt-rvsr/fixtures/transformers';

describe('transformSourceToRouterDef', () => {
  test.each(transformSourceToRouterDefFixture)(
    "should return the expected 'routerDefFound' object when 'apiName' is '%s' and 'routerValidationSchemaName' is '%s'",
    (apiName, routerValidationSchemaName, routerDefExpected) => {
      /*
       * Arrange
       */
      const source = {
        source: { apiName, routerValidationSchemaName },
      } as ITransformSourceToRouterDefInput;

      /*
       * Act
       */
      const routerDefFound = transformSourceToRouterDef(source);

      /*
       * Assert
       */
      expect(routerDefFound).toStrictEqual(routerDefExpected);
    },
  );
});
