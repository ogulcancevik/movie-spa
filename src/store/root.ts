import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModule } from '.';
import { IActiveQuery, IinitialState, ISearch, ISearchResponse } from './types';

const initialState: IinitialState = {
  activeQuery: {} as IActiveQuery,
  searchData: {} as ISearchResponse<ISearch[]>,
  selectedData: {} as ISearch,
  selectedId: '',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    SET_ACTIVE_QUERY: (state, action: PayloadAction<IActiveQuery>) => {
      state.activeQuery = {
        ...state.activeQuery,
        ...action.payload,
      }
    },
    SET_SEARCH: (state, action: PayloadAction<ISearchResponse<ISearch[]>>) => {
      state.searchData = action.payload;
    },
    SET_SELECTED_ID: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    },
    SET_DETAIL_DATA: (state, action: PayloadAction<ISearch>) => {
      state.selectedData = action.payload;
    },
  },
});

export const {
  SET_SEARCH,
  SET_ACTIVE_QUERY,
  SET_SELECTED_ID,
  SET_DETAIL_DATA,
} = rootSlice.actions;

export const rootSelector = (state: IModule) => state.root;

export default rootSlice.reducer;
