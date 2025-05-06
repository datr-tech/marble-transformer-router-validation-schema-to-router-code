import {
  routerDefDolomiteHopCreateMock,
  routerDefEntityFrameworkReadMock,
  routerDefGranul8ResourceDeleteMock,
  routerDefProcThreadUpdateMock,
} from '@test-mt-rvsr/doubles/mocks/routerDefs';

export const transformSourceToRouterDefFixture = [
  [
    'dolomite', // apiName
    'hopValidationSchemaCreateHop', // routerValidationSchemaName
    routerDefDolomiteHopCreateMock, // routerDef
  ],
  [
    'entity', // apiName
    'frameworkValidationSchemaReadFramework', // routerValidationSchemaName
    routerDefEntityFrameworkReadMock, // routerDef
  ],
  [
    'granul8', // apiName
    'resourceValidationSchemaDeleteResource', // routerValidationSchemaName
    routerDefGranul8ResourceDeleteMock, // routerDef
  ],
  [
    'proc', // apiName
    'threadValidationSchemaUpdateThread', // routerValidationSchemaName
    routerDefProcThreadUpdateMock, // routerDef
  ],
];
