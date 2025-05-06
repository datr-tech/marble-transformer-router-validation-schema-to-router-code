/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerHttpMethodName: IHandler = ({ accumulator }) => {
  let controllerMethodBase = '';
  let httpMethodName = '';

  if (typeof accumulator['controllerMethodBase'] !== 'undefined') {
    controllerMethodBase = accumulator['controllerMethodBase'] as string;
  }

  if (controllerMethodBase !== '') {
    switch (controllerMethodBase) {
      case 'Create':
        httpMethodName = 'post';
        break;

      case 'Delete':
        httpMethodName = 'delete';
        break;

      case 'Read':
        httpMethodName = 'get';
        break;

      case 'Update':
        httpMethodName = 'patch';
        break;
    }
  }

  if (httpMethodName !== '') {
    accumulator['httpMethodName'] = httpMethodName;
  }

  return accumulator;
};
