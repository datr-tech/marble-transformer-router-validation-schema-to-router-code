/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerIsCreate: IHandler = ({ accumulator }) => {
  let isCreate = false;
  let httpMethodName = '';

  if (typeof accumulator['httpMethodName'] !== 'undefined') {
    httpMethodName = accumulator['httpMethodName'] as string;
  }

  if (httpMethodName !== '') {
    isCreate = httpMethodName == 'post';
  }

  accumulator['isCreate'] = isCreate;

  return accumulator;
};
