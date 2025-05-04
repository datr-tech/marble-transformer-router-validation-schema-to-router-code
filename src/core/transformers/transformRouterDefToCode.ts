/**
 * @module core/transformers
 */
import { routerTemplatePath } from '@app-mt-rvsr/core/config';
import { ITransformRouterDefToCode } from '@app-mt-rvsr/interfaces/core/transformers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

/**
 * @name					transformRouterDefToCode
 *
 * @description		Transform an intermediate representation of an 'router'
 *                (the received 'routerDef') to a code string.
 *
 * @param					{ITransformRouterDefToCodeInput}	params
 * @param					{string}													params.routerDef
 *
 * @returns				{ITransformRouterDefToCodeOutput}	The generated routerCode as a string.
 *
 * @author        Datr.Tech Admin <admin@datr.tech>
 * @version       0.3.1
 */
export const transformRouterDefToCode: ITransformRouterDefToCode = ({ routerDef }) =>
  fsTemplate.getContentsFromPath(routerTemplatePath, routerDef);
