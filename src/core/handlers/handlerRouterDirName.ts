/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerRouterDirName: IHandler = ({ accumulator }) => {
  let routerDirName = '';
  let modelPrefix = '';

  if (typeof accumulator['modelPrefix'] !== 'undefined') {
    modelPrefix = accumulator['modelPrefix'] as string;
  }

  if (modelPrefix !== '') {
    routerDirName = modelPrefix + 'Router';
  }

  if (routerDirName !== '') {
    accumulator['routerDirName'] = routerDirName;
  }

  return accumulator;
};
