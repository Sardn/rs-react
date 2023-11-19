import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchReducer';
import cardsReducer from './reducers/CardsReducer';
import sidebarReducer from './reducers/SidebarReducer';
// import { API_URL } from '../services/dataLoader/settingsAPI';

const reducerRoot = combineReducers({
  searchReducer,
  cardsReducer,
  sidebarReducer,
  // [API_URL.reducerPath]: API_URL.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: reducerRoot,
    //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API_URL.middleware),
  });
};

// const store = configureStore({
//   reducer: {},
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
