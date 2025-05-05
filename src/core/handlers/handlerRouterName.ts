/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerRouterName: IHandler = ({ source, accumulator }) => {
  let routerName = '';
  let routerValidationSchemaName = '';

  if (typeof source['routerValidationSchemaName'] !== 'undefined') {
    routerValidationSchemaName = source['routerValidationSchemaName'] as string;
  }

  if (routerValidationSchemaName !== '') {
    routerName = routerValidationSchemaName.replace('ValidationSchema', 'Router');
  }

  if (routerName !== '') {
    accumulator['routerName'] = routerName;
  }

  return accumulator;
};
