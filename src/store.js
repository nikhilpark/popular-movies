import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mySaga from './sagas';
//create saga middleware
const sagaMiddleware = createSagaMiddleware();
//mount it on the store
export const store = createStore(reducer,
     applyMiddleware(sagaMiddleware)
     );

//then run the sagas
sagaMiddleware.run(mySaga);

//render the application 

