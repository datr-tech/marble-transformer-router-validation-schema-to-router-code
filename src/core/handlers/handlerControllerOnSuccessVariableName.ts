import { IHandler } from '@datr.tech/marble-transformer-core';

export const handlerControllerOnSuccessVariableName: IHandler = ({ accumulator }) => {
  let controllerMethodName = '';
  let controllerOnSuccessVariableName = '';
  let modelInstanceName = '';
  let modelPrimaryKey = '';

  if (typeof accumulator['controllerMethodName'] !== 'undefined') {
    controllerMethodName = accumulator['controllerMethodName'] as string;
  }

  if (typeof accumulator['modelInstanceName'] !== 'undefined') {
    modelInstanceName = accumulator['modelInstanceName'] as string;
  }

  if (typeof accumulator['modelPrimaryKey'] !== 'undefined') {
    modelPrimaryKey = accumulator['modelPrimaryKey'] as string;
  }

  if (controllerMethodName !== '' && modelInstanceName !== '' && modelPrimaryKey !== '') {
    if (controllerMethodName === 'Create') {
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
