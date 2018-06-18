import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { Provider } from 'react-redux';


import { ConnectedRouter } from 'connected-react-router'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainRouter from './MainRouter';
import configureStore, { history } from './store';


const store = configureStore();
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <MainRouter />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root'));
};

render();

if (module.hot) {
    module.hot.accept("./routes", () => {
        setTimeout(render);
    });
}
