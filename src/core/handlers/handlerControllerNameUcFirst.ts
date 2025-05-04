import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerNameUcFirst: IHandler = ({ accumulator }) => {
  let controllerName = '';
  let controllerNameUcFirst = '';

  if (typeof accumulator['controllerName'] !== 'undefined') {
    controllerName = accumulator['controllerName'] as string;
  }

  if (controllerName !== '') {
    controllerNameUcFirst =
      controllerName.charAt(0).toUpperCase() + controllerName.slice(1);
  }

  if (controllerNameUcFirst !== '') {
    accumulator['controllerNameUcFirst'] = controllerNameUcFirst;
  }

  return accumulator;
};
