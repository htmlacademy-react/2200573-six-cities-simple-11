import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferSearchData} from '../../types/state';
import {fetchHotelsAction} from '../api-actions';

const initialState: OfferSearchData = {
  offers: [],
  isDataLoading: false,
  hasError: false,
};

export const offerSearchData = createSlice({
  name: NameSpace.OfferSearchData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsAction.pending, (state) => {
        state.isDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchHotelsAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchHotelsAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      });
  }
});
