import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'app/store';
import Rockets from 'routes/rockets';

describe('Rockets display test', () => {
  test('check rockets are rendered', () => {
    const rockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});