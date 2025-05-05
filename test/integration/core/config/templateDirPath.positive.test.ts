import path from 'node:path';
import { templateDirPath } from '../../../../dist';

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
