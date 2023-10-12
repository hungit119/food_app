import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
  },
  orderDetails: [],
  totalMount: 0,
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setOrderDetails: (state, action) => {
      state.orderDetails.push(action);
    },
    setAllOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
    setAddToTalAmount: (state, action) => {
      state.totalMount += action.payload;
    },
    setToTalAmount: (state, action) => {
      state.totalMount = action.payload;
    },
  },
});
export const { setOrder, setOrderDetails, setAddToTalAmount,setAllOrderDetails,setToTalAmount } =
  orderSlice.actions;
export default orderSlice.reducer;
