/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerRouterInterfaceName: IHandler = ({ accumulator }) => {
  let routerInterfaceName = '';
  let routerNameUcFirst = '';

  if (typeof accumulator['routerNameUcFirst'] !== 'undefined') {
    routerNameUcFirst = accumulator['routerNameUcFirst'] as string;
  }

  if (routerNameUcFirst !== '') {
    routerInterfaceName = 'I' + routerNameUcFirst;
  }

  if (routerInterfaceName !== '') {
    accumulator['routerInterfaceName'] = routerInterfaceName;
  }

  return accumulator;
};
