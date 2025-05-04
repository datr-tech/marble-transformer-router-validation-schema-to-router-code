import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerRouterValidationSchemaName: IHandler = ({ source, accumulator }) => {
  let routerValidationSchemaName = '';

  if (typeof source['routerValidationSchemaName'] !== 'undefined') {
    routerValidationSchemaName = source['routerValidationSchemaName'] as string;
  }

  if (routerValidationSchemaName !== '') {
    accumulator['routerValidationSchemaName'] = routerValidationSchemaName;
  }

  return accumulator;
};
