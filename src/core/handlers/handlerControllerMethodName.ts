/**
 * @module core/handlers
 */
import { schemaMethodsMap } from '@app-mt-rvsr/core/maps';
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerMethodName: IHandler = ({ accumulator }) => {
  let controllerMethodName = '';
  let routerValidationSchemaName = '';

  if (typeof accumulator['routerValidationSchemaName'] !== 'undefined') {
    routerValidationSchemaName = accumulator['routerValidationSchemaName'] as string;
  }

  if (routerValidationSchemaName !== '') {
    for (const methodMapItem of schemaMethodsMap) {
      if (routerValidationSchemaName.includes(methodMapItem.router)) {
        controllerMethodName = methodMapItem.controller;
        break;
      }
    }
  }

  if (controllerMethodName !== '') {
    accumulator['controllerMethodName'] = controllerMethodName;
  }

  return accumulator;
};
