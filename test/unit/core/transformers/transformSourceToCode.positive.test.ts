/**
 * @module unit/core/transformers
 */

/*
 * @datr.tech imports
 */
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

/*
 * Local, non-relative imports
 */
import { routerTemplatePath } from '@app-mt-rvsr/core/config';
import { transformSourceToCode } from '@app-mt-rvsr/core/transformers';
import { ITransformSourceToCodeInput } from '@app-mt-rvsr/interfaces/core/transformers';

/*
 * Local, non-relative test imports
 */
import { transformSourceToCodeFixture } from '@test-mt-rvsr/fixtures/transformers';

/**
 * @name					transformSourceToCode.positive
 *
 * @description		Perform a series of positive tests upon
 *                'transformSourceToCode' using pre-defined
 *                fixtures.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version       0.4.2
 *
 * @see						Fixtures: {@link module:test/fixtures/transformers}
 */
describe('transformSourceToCode.positive', () => {
  test.each(transformSourceToCodeFixture)(
    "should return the expected 'code' string when 'apiName' is '%s' and 'routerValidationSchemaName' is '%s'",
    (apiName, routerValidationSchemaName, routerDef) => {
      /*
       * Arrange
       */
      const source = {
        apiName,
        routerValidationSchemaName,
      } as ITransformSourceToCodeInput;
      const codeExpected = fsTemplate.getContentsFromPath(routerTemplatePath, routerDef);

      /*
       * Act
       */
      const codeFound = transformSourceToCode(source);

      /*
       * Assert
       */
      expect(codeFound).toStrictEqual(codeExpected);
    },
  );
});
