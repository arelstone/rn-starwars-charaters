import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';


const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, undefined, composedEnhancers);

export type RootState = ReturnType<typeof rootReducer>;
export type GetState = () => RootState;
