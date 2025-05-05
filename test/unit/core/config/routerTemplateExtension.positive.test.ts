import { routerTemplateExtension } from '@app-mt-rvsr/core/config';

describe('routerTemplateExtension', () => {
  describe('positive', () => {
    test("should return the expected value of 'hbs'", () => {
      expect(routerTemplateExtension).toEqual('hbs');
    });
  });
});
