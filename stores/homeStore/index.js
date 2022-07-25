import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import request from '../../utils/request';

// axios返回promise
const loadHomeListAPI = () => request.get("http://localhost:3030/api/weeks/list")

const initialState = {
  cardList: [],
}

// 返回Promise
export const getHomeList = createAsyncThunk("home/getList", async () => {
  const response = await loadHomeListAPI()
  return response?.data
});

const homeStoreSlice = createSlice({
  name: 'homeData',
  initialState,
  reducers: {},
  extraReducers: {
    // 成功fulfilled时执行的操作  pending等待  rejected拒绝
    [getHomeList.fulfilled](state, action) {
      state.cardList = action.payload
    },
  },
})

export const selectHomeData = (state) => state.homeData

export const homeStoreReducer = homeStoreSlice.reducer
