import Savory from './Savory';

describe('Savory', () => {
  it('should render a card', () => {
    expect(Savory).toMatchSnapshot();
  });

});