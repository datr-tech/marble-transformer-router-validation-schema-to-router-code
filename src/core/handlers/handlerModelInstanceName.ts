import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerModelInstanceName: IHandler = ({ accumulator }) => {
  let modelInstanceName = '';
  let modelPrefix = '';

  if (typeof accumulator['modelPrefix'] !== 'undefined') {
    modelPrefix = accumulator['modelPrefix'] as string;
  }

  if (modelPrefix !== '') {
    modelInstanceName = modelPrefix + 'Model';
  }

  if (modelInstanceName !== '') {
    accumulator['modelInstanceName'] = modelInstanceName;
  }

  return accumulator;
};
