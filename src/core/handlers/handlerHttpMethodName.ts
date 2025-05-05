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
        httpMethodName = 'Post';
        break;

      case 'Delete':
        httpMethodName = 'Delete';
        break;

      case 'Read':
        httpMethodName = 'Get';
        break;

      case 'Update':
        httpMethodName = 'Patch';
        break;
    }
  }

  if (httpMethodName !== '') {
    accumulator['httpMethodName'] = httpMethodName;
  }

  return accumulator;
};
