import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory()

const configureStore = () => {

    const middlewares = [
        routerMiddleware(history),
        thunk,
        logger,
    ];
  
    const store = createStore(
        connectRouter(history)(rootReducer),
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    if(module.hot) {
        module.hot.accept("../reducers/", () => {            
                const updatedRootReducer = require("../reducers/").default;
                store.replaceReducer(updatedRootReducer);
            }
        );
    }

    return store;
};

export default configureStore;

export {
    history
};