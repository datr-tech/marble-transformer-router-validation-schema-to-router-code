/**
 * @module interfaces/core/transformers
 */
import { ITransformSourceToCodeInput } from './ITransformSourceToCodeInput';
import { ITransformSourceToCodeOutput } from './ITransformSourceToCodeOutput';

/**
 * @name					ITransformSourceToCode
 *
 * @description		The interface for {@link module:core/transformers/transformSourceToCode} with child inputs and outputs.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformSourceToCode {
  (args: ITransformSourceToCodeInput): ITransformSourceToCodeOutput;
}
