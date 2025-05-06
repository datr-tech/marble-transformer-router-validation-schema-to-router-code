import {
  routerDefDolomiteHopCreateMock,
  routerDefEntityFrameworkReadMock,
  routerDefGranul8ResourceDeleteMock,
  routerDefProcThreadUpdateMock,
} from '@test-mt-rvsr/doubles/mocks/routerDefs';

export const transformRouterDefToCodeFixture = [
  [
    'dolomite', // apiName
    routerDefDolomiteHopCreateMock, // routerDef
  ],
  [
    'entity', // apiName
    routerDefEntityFrameworkReadMock, // routerDef
  ],
  [
    'granul8', // apiName
    routerDefGranul8ResourceDeleteMock, // routerDef
  ],
  [
    'proc', // apiName
    routerDefProcThreadUpdateMock, // routerDef
  ],
];
