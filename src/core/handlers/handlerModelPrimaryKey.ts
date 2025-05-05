/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerModelPrimaryKey: IHandler = ({ accumulator }) => {
  let modelPrefix = '';
  let modelPrimaryKey = '';

  if (typeof accumulator['modelPrefix'] !== 'undefined') {
    modelPrefix = accumulator['modelPrefix'] as string;
  }

  if (modelPrefix !== '') {
    modelPrimaryKey = modelPrefix + 'Id';
  }

  if (modelPrimaryKey !== '') {
    accumulator['modelPrimaryKey'] = modelPrimaryKey;
  }

  return accumulator;
};
