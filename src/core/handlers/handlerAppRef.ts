import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerAppRef: IHandler = ({ accumulator }) => {
  let apiName = '';
  let appRef = '';

  if (typeof accumulator['apiName'] !== 'undefined') {
    apiName = accumulator['apiName'] as string;
  }

  if (apiName !== '') {
    appRef = '@app-' + (apiName !== 'proc' ? 'a' + apiName.charAt(0) : 'p2');
  }

  if (appRef !== '') {
    accumulator['appRef'] = appRef;
  }

  return accumulator;
};
