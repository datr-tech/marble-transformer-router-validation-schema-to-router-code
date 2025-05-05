/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerInterfaceName: IHandler = ({ accumulator }) => {
  let controllerInterfaceName = '';
  let controllerFqnsUcFirst = '';

  if (typeof accumulator['controllerFqnsUcFirst'] !== 'undefined') {
    controllerFqnsUcFirst = accumulator['controllerFqnsUcFirst'] as string;
  }

  if (controllerFqnsUcFirst !== '') {
    controllerInterfaceName = 'I' + controllerFqnsUcFirst;
  }

  if (controllerInterfaceName !== '') {
    accumulator['controllerInterfaceName'] = controllerInterfaceName;
  }

  return accumulator;
};
