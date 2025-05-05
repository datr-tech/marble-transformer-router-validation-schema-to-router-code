/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerHttpMethodName: IHandler = ({ accumulator }) => {
  let controllerMethodName = '';
  let httpMethodName = '';

  if (typeof accumulator['controllerMethodName'] !== 'undefined') {
    controllerMethodName = accumulator['controllerMethodName'] as string;
  }

  if (controllerMethodName !== '') {
    switch (controllerMethodName) {
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
