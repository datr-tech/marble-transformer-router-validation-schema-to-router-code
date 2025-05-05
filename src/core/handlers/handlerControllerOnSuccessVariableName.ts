/**
 * @module core/handlers
 */
import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerOnSuccessVariableName: IHandler = ({ accumulator }) => {
  let controllerMethodBase = '';
  let controllerOnSuccessVariableName = '';
  let modelInstanceName = '';
  let modelPrimaryKey = '';

  if (typeof accumulator['controllerMethodBase'] !== 'undefined') {
    controllerMethodBase = accumulator['controllerMethodBase'] as string;
  }

  if (typeof accumulator['modelInstanceName'] !== 'undefined') {
    modelInstanceName = accumulator['modelInstanceName'] as string;
  }

  if (typeof accumulator['modelPrimaryKey'] !== 'undefined') {
    modelPrimaryKey = accumulator['modelPrimaryKey'] as string;
  }

  if (controllerMethodBase !== '' && modelInstanceName !== '' && modelPrimaryKey !== '') {
    if (controllerMethodBase === 'Read') {
      controllerOnSuccessVariableName = modelInstanceName;
    } else {
      controllerOnSuccessVariableName = modelPrimaryKey;
    }
  }

  if (controllerOnSuccessVariableName !== '') {
    accumulator['controllerOnSuccessVariableName'] = controllerOnSuccessVariableName;
  }

  return accumulator;
};
