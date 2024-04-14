import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiConfig} from '../../service/api';
import {ApiUrl} from '../../service/apiConfig';
import {HomeState, ListingRequest, ListingResponse} from '../../models';


export const initialState : HomeState = {
  cryptoList: [],
  start: 1,
  totalCount: 0,
};

export const getListingData = createAsyncThunk(
  'coinLatestList',
  async (params: ListingRequest, thunkAPI) => {
    try {
      const apiRes : any = await new ApiConfig().getJSON(
        ApiUrl.listingLatest,
        params,
      );
      const res = apiRes.data as ListingResponse
      if (res?.status.error_code == 0) {
        return res;
      } else {
        return thunkAPI.rejectWithValue(new Error('Something went worng'));
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const homeSlice = createSlice({
  initialState: initialState,
  name: 'Home',
  reducers: {
    setStart: (state, action) => {
      state.start = action?.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getListingData.fulfilled, (state: any, action) => {
      state.cryptoList = action?.payload?.data;
      state.totalCount = action?.payload?.status?.total_count;
    });
  },
});

export const {setStart} = homeSlice.actions;
export default homeSlice.reducer;
