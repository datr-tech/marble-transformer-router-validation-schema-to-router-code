import { routerTemplateName } from './../../../../dist';

describe('routerTemplateName', () => {
  describe('positive', () => {
    test("should return the expected value of 'routerTemplate'", () => {
      expect(routerTemplateName).toEqual('routerTemplate');
    });
  });
});
