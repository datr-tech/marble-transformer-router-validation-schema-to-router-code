import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerModelPrefix: IHandler = ({ source, accumulator }) => {
  let routerValidationSchemaName = '';
  let modelPrefix = '';

  if (typeof source['routerValidationSchemaName'] !== 'undefined') {
    routerValidationSchemaName = source['routerValidationSchemaName'] as string;
  }

  if (
    routerValidationSchemaName !== '' &&
    routerValidationSchemaName.includes('ValidationSchema')
  ) {
    modelPrefix = routerValidationSchemaName.split('ValidationSchema')[0];
  }

  if (modelPrefix !== '') {
    accumulator['modelPrefix'] = modelPrefix;
  }

  return accumulator;
};
