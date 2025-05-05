import { templateDirPath } from '@app-mt-rvsr/core/config';
import path from 'node:path';

describe('templateDirPath', () => {
  describe('positive', () => {
    test("should return the expected value of 'templateDirPath'", () => {
      /*
       * Arrange
       */
      const templateDirPathExpected = path.resolve('./', 'src', 'core', 'templates');

      /*
       * Act
       */
      const templateDirPathFound = templateDirPath;

      /*
       * Assert
       */
      expect(templateDirPathFound).toEqual(templateDirPathExpected);
    });
  });
});
