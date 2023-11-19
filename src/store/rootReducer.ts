import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchSlice';
import loaderReducer from './reducers/LoaderSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  loader: loaderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
