/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

/**
 * @name          handlerApiName
 *
 * @description   If a non-empty 'apiName' prop is found within
 *                the received 'source' object, add the prop to
 *                the 'accumulator'.
 *
 * @param         {IHandlerInput}					params
 * @param         {IHandlerAccumulator}		params.accumulator
 * @param         {ITransformSource}			params.source
 *
 * @returns       {IHandlerOutput}				Return the 'accumulator'
 *
 * @author        Datr.Tech Admin <admin@datr.tech>
 * @version       0.3.1
 *
 * @see           Related unit tests: {@link module:unit/core/handlers}
 */
export const handlerApiName: IHandler = ({ source, accumulator }) => {
  const accumulatorLocal = { ...accumulator };
  let apiName = '';

  if (typeof source['apiName'] !== 'undefined') {
    apiName = source['apiName'] as string;
  }

  if (apiName !== '') {
    accumulatorLocal['apiName'] = apiName;
  }

  return accumulatorLocal;
};
