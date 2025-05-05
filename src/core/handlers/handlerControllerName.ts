/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerName: IHandler = ({ accumulator }) => {
  let controllerName = '';
  let modelPrefix = '';

  if (typeof accumulator['modelPrefix'] !== 'undefined') {
    modelPrefix = accumulator['modelPrefix'] as string;
  }

  if (modelPrefix !== '') {
    controllerName = modelPrefix + 'Controller';
  }

  if (controllerName !== '') {
    accumulator['controllerName'] = controllerName;
  }

  return accumulator;
};
