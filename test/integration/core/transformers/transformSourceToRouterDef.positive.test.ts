import { transformSourceToRouterDefFixture } from '@test-mt-rvsr/fixtures/transformers';
import {
  ITransformSourceToRouterDefInput,
  transformSourceToRouterDef,
} from './../../../../dist';

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
