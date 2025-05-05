/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerFqnsUcFirst: IHandler = ({ accumulator }) => {
  let controllerFqns = '';
  let controllerFqnsUcFirst = '';

  if (typeof accumulator['controllerFqns'] !== 'undefined') {
    controllerFqns = accumulator['controllerFqns'] as string;
  }

  if (controllerFqns !== '') {
    controllerFqnsUcFirst =
      controllerFqns.charAt(0).toUpperCase() + controllerFqns.slice(1);
  }

  if (controllerFqnsUcFirst !== '') {
    accumulator['controllerFqnsUcFirst'] = controllerFqnsUcFirst;
  }

  return accumulator;
};
