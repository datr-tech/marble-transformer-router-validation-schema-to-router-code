import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerModelPrefixUcFirst: IHandler = ({ accumulator }) => {
  let modelPrefix = '';
  let modelPrefixUcFirst = '';

  if (typeof accumulator['modelPrefix'] !== 'undefined') {
    modelPrefix = accumulator['modelPrefix'] as string;
  }

  if (modelPrefix !== '') {
    modelPrefixUcFirst = modelPrefix.charAt(0).toUpperCase() + modelPrefix.slice(1);
  }

  if (modelPrefixUcFirst !== '') {
    accumulator['modelPrefixUcFirst'] = modelPrefixUcFirst;
  }

  return accumulator;
};
