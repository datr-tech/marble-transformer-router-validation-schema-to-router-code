import { routerTemplateName } from '@app-mt-rvsr/core/config';

describe('routerTemplateName', () => {
  describe('positive', () => {
    test("should return the expected value of 'routerTemplate'", () => {
      expect(routerTemplateName).toEqual('routerTemplate');
    });
  });
});
