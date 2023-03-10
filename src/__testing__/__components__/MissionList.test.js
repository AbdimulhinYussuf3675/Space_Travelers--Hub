import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'app/store';
import MissionList from 'components/missionList';

describe('MissionList component test', () => {
  const data = {
    id:3, 
    name: "mission 1", 
    description:"lorem ipsume fnjfie eifje", 
    joined: false,
  }
  test('MissionList is redered correctly', () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <MissionList data={data} />
        </BrowserRouter>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('check if MissionList prop is an object', () => {
    expect(data).toMatchObject({
      id:3, 
      name: "mission 1", 
      description:"lorem ipsume fnjfie eifje", 
      joined: false,
    });
  });
});
