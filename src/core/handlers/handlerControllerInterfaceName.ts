import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerInterfaceName: IHandler = ({ accumulator }) => {
  let controllerInterfaceName = '';
  let controllerNameUcFirst = '';

  if (typeof accumulator['controllerNameUcFirst'] !== 'undefined') {
    controllerNameUcFirst = accumulator['controllerNameUcFirst'] as string;
  }

  if (controllerNameUcFirst !== '') {
    controllerInterfaceName = 'I' + controllerNameUcFirst;
  }

  if (controllerInterfaceName !== '') {
    accumulator['controllerInterfaceName'] = controllerInterfaceName;
  }

  return accumulator;
};
