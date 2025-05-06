import { routerExtension } from './../../../../dist';

describe('routerExtension', () => {
  describe('positive', () => {
    test("should return the expected value of 'ts'", () => {
      expect(routerExtension).toEqual('ts');
    });
  });
});
