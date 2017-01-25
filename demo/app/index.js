import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './components/Root';
import './styles/main.scss';

const store = configureStore();

render(
    <AppContainer>
      <Root store={store}/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
        <AppContainer>
          <NewRoot store={store}/>
        </AppContainer>,
        document.getElementById('root')
    );
  });
}
