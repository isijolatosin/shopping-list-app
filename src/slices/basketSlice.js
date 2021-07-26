import { createSlice } from '@reduxjs/toolkit';

// INITIALIZING REDUX STATE
const initialState = {
  items: [],
  historyBasket: [],
  user: `${JSON.parse(localStorage.getItem('user'))}`,
};

// CREATING SLICE AND REDUCER ACTIONS
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    addToHistoryBasket: (state, action) => {
      state.historyBasket = [...state.historyBasket, action.payload];
    },
    loggedIn: (state, action) => {
      state.user = action.payload;
    },
    loggedOut: (state) => {
      state.user = '';
    },
    removeFromBasket: (state, action) => {
      // console.log(action.payload);
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      // console.log(index);

      let newBasket = [...state.items];

      if (index >= 0) {
        // The item exixts in the basket... remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can not remove product (is: ${action.payload}) as it is not in the basket`
        );
      }
      state.items = newBasket;
    },
  },
});
// END OF CREATING SLICE AND REDUCER ACTIONS

// EXPORTING REDUCERS ACTIONS AND STATES
export const {
  addToBasket,
  addToHistoryBasket,
  removeFromBasket,
  loggedIn,
  loggedOut,
} = basketSlice.actions;

// THIS IS PULLING INFORMATIONS FROM GLOBAL STORE SLICE
export const selectItems = (state) => state.basket.items;
export const historyBasket = (state) => state.basket.historyBasket;
export const userLoggedIn = (state) => state.basket.user;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
