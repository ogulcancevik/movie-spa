import {
  AnyAction,
  combineReducers,
  configureStore,
  Store,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import root from './root';

const reducers = combineReducers({
  root,
});

const middlewares = [thunk];

export const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof reducers>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch;
};
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export type IModule = {
  root: ReturnType<typeof root>;
};
