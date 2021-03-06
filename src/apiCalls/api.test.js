import { getFoodData, mockObj } from './api';

describe('API', () => {
  let url;

  beforeEach(() => {
    const key = 'e3e6267f800bf94ed1db6763e826e406';
    url =`https://food2fork.com/api/search?key=${key}&q=savory`;
    window.fetch= jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockObj)
    })
    );
  });
  it('should make fetch with the correct params', () => {
    getFoodData(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return a food data object', async () => {
    let actual = await getFoodData(url);

    expect(actual).toEqual(mockObj);
  });

  it('should throw an error when catch error is hit', async () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({ status: 404 }));

    const expectedError = Error('TypeError: response.json is not a function');

    await expect(getFoodData(url)).rejects.toEqual(expectedError);
  });
});