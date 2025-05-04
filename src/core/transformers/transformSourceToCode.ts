/**
 * @module core/transformers
 */
import { ITransformSourceToCode } from '@app-mt-rvsr/interfaces/core/transformers';
import { transformRouterDefToCode } from './transformRouterDefToCode';
import { transformSourceToRouterDef } from './transformSourceToRouterDef';

/**
 * @name					transformSourceToCode
 *
 * @description		A 'convenience function' that simplifies the number
 *                of calls required to transform a 'source' object
 *                to 'routerCode'
 *
 * @param					{ITransformSourceToCodeInput}		source
 * @param					{string}												source.apiName
 * @param					{string}												source.routerValidationSchemaName
 *
 * @returns				{ITransformSourceToCodeOutput}	The generated routerCode as a string.
 *
 * @author        Datr.Tech Admin <admin@datr.tech>
 * @version       0.3.1
 */
export const transformSourceToCode: ITransformSourceToCode = (source) => {
  const routerDef = transformSourceToRouterDef({ source });
  return transformRouterDefToCode({ routerDef });
};
