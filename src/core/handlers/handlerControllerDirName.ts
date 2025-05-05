/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerDirName: IHandler = ({ accumulator }) => {
  let controllerDirName = '';
  let modelPrefix = '';

  if (typeof accumulator['modelPrefix'] !== 'undefined') {
    modelPrefix = accumulator['modelPrefix'] as string;
  }

  if (modelPrefix !== '') {
    controllerDirName = modelPrefix + 'Controller';
  }

  if (controllerDirName !== '') {
    accumulator['controllerDirName'] = controllerDirName;
  }

  return accumulator;
};
