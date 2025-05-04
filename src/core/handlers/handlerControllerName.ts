import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerName: IHandler = ({ accumulator }) => {
  let controllerName = '';
  let routerValidationSchemaName = '';

  if (typeof accumulator['routerValidationSchemaName'] !== 'undefined') {
    routerValidationSchemaName = accumulator['routerValidationSchemaName'] as string;
  }

  if (routerValidationSchemaName !== '') {
    controllerName = routerValidationSchemaName.replace('ValidationSchema', 'Controller');
  }

  if (controllerName !== '') {
    accumulator['controllerName'] = controllerName;
  }

  return accumulator;
};
