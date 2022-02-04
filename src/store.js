import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

//store.js
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['alert']
};


const persistedReducer = persistReducer(persistConfig, rootReducer)


const initialState = {}

const middleware = [thunk]

export const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)