/**
 * @module interfaces/core/transformers
 */
import { ITransformSourceToRouterDefInput } from './ITransformSourceToRouterDefInput';
import { ITransformSourceToRouterDefOutput } from './ITransformSourceToRouterDefOutput';

/**
 * @name					ITransformSourceToRouterDef
 *
 * @description		The interface for {@link module:core/transformers/transformSourceToRouterDef} with child inputs and outputs.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformSourceToRouterDef {
  (args: ITransformSourceToRouterDefInput): ITransformSourceToRouterDefOutput;
}
