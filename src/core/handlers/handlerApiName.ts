import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerApiName: IHandler = ({ source, accumulator }) => {
  let apiName = '';

  if (typeof source['apiName'] !== 'undefined') {
    apiName = source['apiName'] as string;
  }

  if (apiName !== '') {
    accumulator['apiName'] = apiName;
  }

  return accumulator;
};
