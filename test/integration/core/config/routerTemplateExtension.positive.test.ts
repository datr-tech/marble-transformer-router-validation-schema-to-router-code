import { routerTemplateExtension } from '../../../../dist';

describe('routerTemplateExtension', () => {
  describe('positive', () => {
    test("should return the expected value of 'hbs'", () => {
      expect(routerTemplateExtension).toEqual('hbs');
    });
  });
});
