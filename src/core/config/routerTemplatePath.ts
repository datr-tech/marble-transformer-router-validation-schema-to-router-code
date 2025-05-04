import path from 'node:path';
import { routerTemplateExtension } from './routerTemplateExtension';
import { routerTemplateName } from './routerTemplateName';
import { templateDirPath } from './templateDirPath';

export const routerTemplatePath = path.resolve(
  templateDirPath,
  `${routerTemplateName}.${routerTemplateExtension}`,
);
