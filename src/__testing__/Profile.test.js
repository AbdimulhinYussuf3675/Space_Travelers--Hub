import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'app/store';
import Profile from 'routes/rockets';

describe('Profile display test', () => {
  test('check if profile is rendered correctly', () => {
    const profile = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
});
