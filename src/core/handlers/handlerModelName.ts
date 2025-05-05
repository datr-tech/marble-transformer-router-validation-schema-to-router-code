/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerModelName: IHandler = ({ accumulator }) => {
  let modelName = '';
  let modelPrefixUcFirst = '';

  if (typeof accumulator['modelPrefixUcFirst'] !== 'undefined') {
    modelPrefixUcFirst = accumulator['modelPrefixUcFirst'] as string;
  }

  if (modelPrefixUcFirst !== '') {
    modelName = modelPrefixUcFirst + 'Model';
  }

  if (modelName !== '') {
    accumulator['modelName'] = modelName;
  }

  return accumulator;
};
