/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

/**
 * @name          handlerAppRef
 *
 * @description   If a non-empty 'apiName' prop is found within
 *                the received 'source' object, use the prop's
 *                value to generate the 'appRef', which will be
 *                used to uniquely define non-relative, within
 *                package imports.
 *
 * @param         {IHandlerInput}					params
 * @param         {IHandlerAccumulator}		params.accumulator
 *
 * @returns       {IHandlerOutput}				Return the 'accumulator'
 *
 * @author        Datr.Tech Admin <admin@datr.tech>
 * @version       0.3.1
 *
 * @see           Related unit tests: {@link module:unit/core/handlers}
 */
export const handlerAppRef: IHandler = ({ accumulator }) => {
  let apiName = '';
  let appRef = '';

  if (typeof accumulator['apiName'] !== 'undefined') {
    apiName = accumulator['apiName'] as string;
  }

  if (apiName !== '') {
    appRef = '@app-' + (apiName !== 'proc' ? 'a' + apiName.charAt(0) : 'ap2');
  }

  if (appRef !== '') {
    accumulator['appRef'] = appRef;
  }

  return accumulator;
};
