/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerMethodName: IHandler = ({ accumulator }) => {
  let controllerMethodName = '';
  let controllerMethodBase = '';
  let modelPrefixUcFirst = '';

  if (typeof accumulator['controllerMethodBase'] !== 'undefined') {
    controllerMethodBase = accumulator['controllerMethodBase'] as string;
  }

  if (typeof accumulator['modelPrefixUcFirst'] !== 'undefined') {
    modelPrefixUcFirst = accumulator['modelPrefixUcFirst'] as string;
  }

  if (controllerMethodBase !== '' && modelPrefixUcFirst !== '') {
    controllerMethodName = controllerMethodBase.toLowerCase() + modelPrefixUcFirst;
  }

  if (controllerMethodName !== '') {
    accumulator['controllerMethodName'] = controllerMethodName;
  }

  return accumulator;
};
