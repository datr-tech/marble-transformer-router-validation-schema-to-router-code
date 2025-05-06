import { routerSrcPathBase } from './../../../../dist';

describe('routerSrcPathBase', () => {
  describe('positive', () => {
    test("should return the expected value of 'src/api/routers'", () => {
      expect(routerSrcPathBase).toEqual('src/api/routers');
    });
  });
});
