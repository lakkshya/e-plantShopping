import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
  },
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Remove item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // Update the quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Export actions for use in components like ProductList and CartItem
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for use in store.js
export default CartSlice.reducer;
