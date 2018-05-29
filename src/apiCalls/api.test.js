import { getFoodData } from './api';
import { mockObt } from './api';

describe('API', () => {
  let url;

  beforeEach(() => {
    url ='https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=savory';
    window.fetch= jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockObj)
    })
    );
  });
});