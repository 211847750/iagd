import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import configureStore from 'redux-mock-store'

import { GlobalState } from './types/index';
const mockStore = configureStore<GlobalState>([]);

it('renders without crashing', () => {
  const store = mockStore({
    clickCounter: 1,
    items: [],
    isLoading: false
  });
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
});
