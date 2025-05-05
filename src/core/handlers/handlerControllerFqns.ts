/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerFqns: IHandler = ({ accumulator }) => {
  let controllerFqns = '';
  let routerValidationSchemaName = '';

  if (typeof accumulator['routerValidationSchemaName'] !== 'undefined') {
    routerValidationSchemaName = accumulator['routerValidationSchemaName'] as string;
  }

  if (routerValidationSchemaName !== '') {
    controllerFqns = routerValidationSchemaName.replace('ValidationSchema', 'Controller');
  }

  if (controllerFqns !== '') {
    accumulator['controllerFqns'] = controllerFqns;
  }

  return accumulator;
};
