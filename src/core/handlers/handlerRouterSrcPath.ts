/**
 * @module core/handlers
 */
import { routerExtension, routerSrcPathBase } from '@app-mt-rvsr/core/config';
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerRouterSrcPath: IHandler = ({ accumulator }) => {
  let routerDirName = '';
  let routerName = '';
  let routerSrcPath = '';

  if (typeof accumulator['routerDirName'] !== 'undefined') {
    routerDirName = accumulator['routerDirName'] as string;
  }

  if (typeof accumulator['routerName'] !== 'undefined') {
    routerName = accumulator['routerName'] as string;
  }

  if (routerDirName !== '' && routerName !== '') {
    routerSrcPath =
      routerSrcPathBase + '/' + routerDirName + '/' + `${routerName}.${routerExtension}`;
  }

  if (routerSrcPath !== '') {
    accumulator['routerSrcPath'] = routerSrcPath;
  }

  return accumulator;
};
