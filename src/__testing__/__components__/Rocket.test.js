import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'app/store';
import Rocket from 'components/Rocket';

describe('Rocket component test', () => {
  const data = {
    id: '2',
    image: 'image',
    name: 'rocket 1',
    description: 'lorem ipsume fnjfie eifje',
    reserved: false,
  };
  test('Rocket is redered correctly', () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket data={data} />
        </BrowserRouter>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('check if rocket prop is an object', () => {
    expect(data).toMatchObject({
      id: '2',
      image: 'image',
      name: 'rocket 1',
      description: 'lorem ipsume fnjfie eifje',
      reserved: false,
    });
  });
});
