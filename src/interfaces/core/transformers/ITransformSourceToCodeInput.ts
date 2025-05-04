/**
 * @module interfaces/core/transformers
 */

/**
 * @name					ITransformSourceToCodeInput
 *
 * @description		The input interface for {@link module:core/transformers/transformerSourceToCode}, which
 *                is directly referenced by {@link module:interfaces/core/transformers/ITransformSourceToCode}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformSourceToCodeInput {
  apiName: string;
  routerValidationSchemaName: string;
}
