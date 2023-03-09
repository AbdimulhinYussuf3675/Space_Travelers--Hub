import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'app/store';
import Missions from 'routes/mission';

describe('Add Missions test', () => {
  test('Render all missions', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });
});
