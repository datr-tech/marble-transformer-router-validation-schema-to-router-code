/**
 * @module core/handlers
 */
import { schemaMethodsMap } from '@app-mt-rvsr/core/maps';
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerMethodBase: IHandler = ({ accumulator }) => {
  let controllerMethodBase = '';
  let routerValidationSchemaName = '';

  if (typeof accumulator['routerValidationSchemaName'] !== 'undefined') {
    routerValidationSchemaName = accumulator['routerValidationSchemaName'] as string;
  }

  if (routerValidationSchemaName !== '') {
    for (const methodMapItem of schemaMethodsMap) {
      if (routerValidationSchemaName.includes(methodMapItem.router)) {
        controllerMethodBase = methodMapItem.controller;
        break;
      }
    }
  }

  if (controllerMethodBase !== '') {
    accumulator['controllerMethodBase'] = controllerMethodBase;
  }

  return accumulator;
};
