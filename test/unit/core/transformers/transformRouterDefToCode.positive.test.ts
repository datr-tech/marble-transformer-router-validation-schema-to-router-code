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
import { transformRouterDefToCode } from '@app-mt-rvsr/core/transformers';
import { ITransformRouterDefToCodeInput } from '@app-mt-rvsr/interfaces/core/transformers';

/*
 * Local, non-relative test imports
 */
import { transformRouterDefToCodeFixture } from '@test-mt-rvsr/fixtures/transformers';

/**
 * @name					transformRouterDefToCode.positive
 *
 * @description		Perform a series of positive tests upon
 *                'transformRouterDefToCode' using pre-defined
 *                fixtures.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version       0.4.2
 *
 * @see						Fixtures: {@link module:test/fixtures/transformers}
 */
describe('transformRouterDefToCode.positive', () => {
  test.each(transformRouterDefToCodeFixture)(
    "should return the expected 'code' string when for 'api-%s'",
    (apiName, routerDef) => {
      /*
       * Arrange
       */
      const routerDefParam = { routerDef } as ITransformRouterDefToCodeInput;
      const codeExpected = fsTemplate.getContentsFromPath(routerTemplatePath, routerDef);

      /*
       * Act
       */
      const codeFound = transformRouterDefToCode(routerDefParam);

      /*
       * Assert
       */
      expect(codeFound).toStrictEqual(codeExpected);
    },
  );
});
