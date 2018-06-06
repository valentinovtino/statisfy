import Favorites from './Favorites';

describe('Favorites', () => {
  it('should render a card', () => {
    expect(Favorites).toMatchSnapshot();
  });
});