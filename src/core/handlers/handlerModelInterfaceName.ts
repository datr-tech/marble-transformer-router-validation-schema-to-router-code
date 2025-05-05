/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerModelInterfaceName: IHandler = ({ accumulator }) => {
  let modelInterfaceName = '';
  let modelName = '';

  if (typeof accumulator['modelName'] !== 'undefined') {
    modelName = accumulator['modelName'] as string;
  }

  if (modelName !== '') {
    modelInterfaceName = 'I' + modelName;
  }

  if (modelInterfaceName !== '') {
    accumulator['modelInterfaceName'] = modelInterfaceName;
  }

  return accumulator;
};
