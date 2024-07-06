import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiConfig} from '../../service/api';
import {ApiUrl} from '../../service/apiConfig';
import {ListingRequest, ListingResponse, NewsListModel, NewsResponse} from '../../models';
import { NewsState } from '../../models/reducerState/NewsState';


export const initialState : NewsState = {
  newsList: [],
};

export const getNewsListingData = createAsyncThunk(
  'newsLatestList',
  async (params: any, thunkAPI) => {
    try {
      const apiRes : any = await new ApiConfig().getNewsJSON(
        ApiUrl.newsList,
        params,
      );
      const res = apiRes.data as NewsResponse
      if (res?.status == "success") {
        return res;
      } else {
        return thunkAPI.rejectWithValue(new Error('Something went worng'));
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const newsSlice = createSlice({
  initialState: initialState,
  name: 'News',
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getNewsListingData.fulfilled, (state: any, action) => {
      state.newsList = [...action?.payload?.results];
    });
  },
});

export default newsSlice.reducer;
