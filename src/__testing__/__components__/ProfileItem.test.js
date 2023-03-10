import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'app/store';
import ProfileItem from 'components/ProfileItem';

describe('ProfileItem component test', () => {
  const name = "item name";

  test('ProfileItem is redered correctly', () => {
    const profileItem = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileItem name={name} />
        </BrowserRouter>
      </Provider>,
    );
    expect(profileItem).toMatchSnapshot();
  });

  test('check if it displays the prop value passed', () => {
    expect(name).toEqual("item name");
  });
});
