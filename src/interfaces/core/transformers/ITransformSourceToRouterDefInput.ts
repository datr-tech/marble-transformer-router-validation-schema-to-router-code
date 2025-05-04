/**
 * @module interfaces/core/transformers
 */

/**
 * @name					ITransformSourceToRouterDefInput
 *
 * @description		The input interface for {@link module:core/transformers/transformerSourceToRouterDef}, which
 *                is directly referenced by {@link module:interfaces/core/transformers/ITransformSourceToRouterDef}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformSourceToRouterDefInput {
  source: {
    apiName: string;
    routerValidationSchemaName: string;
  };
}
