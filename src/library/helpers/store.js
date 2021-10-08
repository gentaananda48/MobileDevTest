import {AsyncStorage} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authentication'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);

export const persistor = persistStore(store);
