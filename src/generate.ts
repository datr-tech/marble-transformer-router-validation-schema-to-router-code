import { transformSourceToCode } from '@app-mt-rvsr/core/transformers';
import fs from 'node:fs/promises';

(async () => {
  const source = {
    apiName: 'dolomite',
    routerValidationSchemaName: 'hopValidationSchemaCreateHop',
  };
  const code = transformSourceToCode(source);
  const codePath =
    '/var/www/freight2/api-dolomite/src/api/routers/hopRouter/hopRouterCreateHop.ts';
  await fs.writeFile(codePath, code, 'utf8');
})();
