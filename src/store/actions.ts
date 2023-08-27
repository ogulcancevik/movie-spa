import { Dispatch } from '@reduxjs/toolkit';
import { SET_DETAIL_DATA, SET_SEARCH } from './root';
import { omdbapiService } from '../services/omdbapi.service';
import { queryBuilder } from '../services/serviceHelpers';
import { store } from '.';

export const getData = () => async (dispatch: Dispatch) => {
  const { activeQuery } = store.getState().root;
  const buildedQuery = queryBuilder(activeQuery);
  const data = await omdbapiService.fetchData(buildedQuery);
  dispatch(SET_SEARCH(data));
};


export const getDetail = (id: string) => async (dispatch: Dispatch) => {
  const data = await omdbapiService.fetchDetail(id);
  dispatch(SET_DETAIL_DATA(data));
}