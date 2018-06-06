import { mockObj, mockCleanedDataObj, userCleanedData } from '../mockData';
import { cleanData } from './helper';

describe('Helper', () => {
  it('should clean data', () => {
    let actual = cleanData(mockObj.recipes);

    expect(actual).toEqual(userCleanedData);
  });
});