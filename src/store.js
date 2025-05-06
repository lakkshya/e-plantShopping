import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    // The 'cart' slice will be managed by cartReducer
    cart: cartReducer,
  },
});

export default store;
