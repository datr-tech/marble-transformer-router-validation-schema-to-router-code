/**
 * @module interfaces/core/transformers
 */
import { IHandlerAccumulator } from '@datr.tech/marble-transformer-core';

/**
 * @name					ITransformSourceToRouterDefOutput
 *
 * @description		The output interface for {@link module:core/transformers/transformSourceToRouterDef}, which
 *                is directly referenced by {@link module:interfaces/core/transformers/ITransformSourceToRouterDef}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export type ITransformSourceToRouterDefOutput = IHandlerAccumulator;
