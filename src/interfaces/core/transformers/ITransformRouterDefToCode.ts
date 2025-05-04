/**
 * @module interfaces/core/transformers
 */
import { ITransformRouterDefToCodeInput } from './ITransformRouterDefToCodeInput';
import { ITransformRouterDefToCodeOutput } from './ITransformRouterDefToCodeOutput';

/**
 * @name					ITransformRouterDefToCode
 *
 * @description		The interface for {@link module:core/transformers/transformRouterDefToCode} with child inputs and outputs.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformRouterDefToCode {
  (args: ITransformRouterDefToCodeInput): ITransformRouterDefToCodeOutput;
}
