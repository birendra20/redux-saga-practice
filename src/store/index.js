import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
    //create saga middleware
    const sagaMiddleWare = createSagaMiddleware();
    //mount it in a store
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger, sagaMiddleWare)),
    );
    sagaMiddleWare.run(rootSaga);
    return store;
};

export default configureStore;
