/**
 * @module core/transformers
 */
import {
  handlerApiName,
  handlerAppRef,
  handlerControllerDirName,
  handlerControllerFqns,
  handlerControllerFqnsUcFirst,
  handlerControllerInterfaceName,
  handlerControllerMethodBase,
  handlerControllerMethodName,
  handlerControllerName,
  handlerControllerOnSuccessVariableName,
  handlerHttpMethodName,
  handlerModelInstanceName,
  handlerModelInterfaceName,
  handlerModelName,
  handlerModelPrefix,
  handlerModelPrefixUcFirst,
  handlerModelPrimaryKey,
  handlerRouterInterfaceName,
  handlerRouterName,
  handlerRouterNameUcFirst,
  handlerRouterValidationSchemaName,
} from '@app-mt-rvsr/core/handlers';
import { ITransformSourceToRouterDef } from '@app-mt-rvsr/interfaces/core/transformers';
import { transformer } from '@datr.tech/marble-transformer-core';

/**
 * @name					transformSourceToRouterDef
 *
 * @description		Using the defined 'handlers', transform the
 *                received 'source' object to an "intermediate
 *                representation" of a 'router'.
 *
 * @param					{ITransformSourceToRouterDefInput}	params
 * @param					{string}														params.apiName
 * @param					{string}														params.routerValidationSchemaName
 *
 * @returns				{ITransformSourceToRouterDefOutput}	The "intermediate representation" of a router.
 *
 * @author        Datr.Tech Admin <admin@datr.tech>
 * @version       0.3.1
 */
export const transformSourceToRouterDef: ITransformSourceToRouterDef = ({ source }) => {
  /*
   * The handlers will be processed in
   * the order given directly below.
   */
  const handlers = [
    handlerApiName,
    handlerAppRef,
    handlerRouterValidationSchemaName,
    handlerModelPrefix,
    handlerModelPrefixUcFirst,
    handlerModelName,
    handlerModelPrimaryKey,
    handlerModelInstanceName,
    handlerControllerName,
    handlerControllerFqns,
    handlerControllerFqnsUcFirst,
    handlerControllerInterfaceName,
    handlerControllerDirName,
    handlerControllerMethodBase,
    handlerControllerMethodName,
    handlerControllerOnSuccessVariableName,
    handlerHttpMethodName,
    handlerRouterName,
    handlerRouterNameUcFirst,
    handlerRouterInterfaceName,
    handlerModelInterfaceName,
  ];
  const transform = transformer({ handlers });

  return transform({ source });
};
