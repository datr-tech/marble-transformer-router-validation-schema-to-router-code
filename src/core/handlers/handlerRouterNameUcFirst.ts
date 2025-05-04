import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerRouterNameUcFirst: IHandler = ({ accumulator }) => {
  let routerName = '';
  let routerNameUcFirst = '';

  if (typeof accumulator['routerName'] !== 'undefined') {
    routerName = accumulator['routerName'] as string;
  }

  if (routerName !== '') {
    routerNameUcFirst = routerName.charAt(0).toUpperCase() + routerName.slice(1);
  }

  if (routerNameUcFirst !== '') {
    accumulator['routerNameUcFirst'] = routerNameUcFirst;
  }

  return accumulator;
};
