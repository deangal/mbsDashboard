import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  dateSlice from './slices/DateSlice'

import OrderSlice from './slices/OrdersSlice'


//persist conf
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

export const rootReducer = combineReducers({MbsOrders:OrderSlice,date:dateSlice })

//persist conf
const persistedReducer = persistReducer(persistConfig, 
  rootReducer
)

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),


})

export let persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch