/**
 * @module interfaces/core/transformers
 */
import { IHandlerAccumulator } from '@datr.tech/marble-transformer-core';

/**
 * @name					ITransformRouterDefToCodeInput
 *
 * @description		The input interface for {@link module:core/transformers/transformerRouterDefToCode}, which
 *                is directly referenced by {@link module:interfaces/core/transformers/ITransformRouterDefToCode}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformRouterDefToCodeInput {
  routerDef: IHandlerAccumulator;
}
