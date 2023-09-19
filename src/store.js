import { configureStore, createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "products",
  initialState: {
    ProductsItem: JSON.parse(localStorage.getItem("Products")) || [],
    TotalAmount: JSON.parse(localStorage.getItem("TotalAmount")) || 0,
  },
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.ProductsItem.find(
        (item) => item.id === action.payload.ValueProduct.id
      );
      if (existingItem) {
        existingItem.number++;
        existingItem.price =
          action.payload.ValueProduct.price * existingItem.number;
        state.TotalAmount += action.payload.ValueProduct.price;
      } else {
        state.TotalAmount += action.payload.ValueProduct.price;
        state.ProductsItem.push(action.payload.ValueProduct);
      }
      localStorage.setItem("TotalAmount", state.TotalAmount);
      localStorage.setItem("Products", JSON.stringify(state.ProductsItem));
    },
    RemoveItem: (state, action) => {
      const existingItem = state.ProductsItem.find(
        (item) => item.id === action.payload.ValueProduct.id
      );
      if (existingItem) {
        existingItem.number--;
        existingItem.price =
          action.payload.ValueProduct.price * existingItem.number;
        state.TotalAmount -= action.payload.ValueProduct.price;
        if (existingItem.number === 0) {
          state.ProductsItem = state.ProductsItem.filter(
            (item) => item.id !== existingItem.id
          );
        }
      }
      localStorage.setItem("TotalAmount", state.TotalAmount);
      localStorage.setItem("Products", JSON.stringify(state.ProductsItem));
    },
    DeleteItem: (state, action) => {
      const existingItem = state.ProductsItem.find(
        (item) => item.id === action.payload.ValueProduct.id
      );
      if (existingItem) {
        state.TotalAmount -= action.payload.ValueProduct.price;
        existingItem.number = 0;
        existingItem.price = 0;
        if (existingItem.number === 0) {
          state.ProductsItem = state.ProductsItem.filter(
            (item) => item.id !== existingItem.id
          );
        }
      }
      localStorage.setItem("TotalAmount", state.TotalAmount);
      localStorage.setItem("Products", JSON.stringify(state.ProductsItem));
    },
    InBasketAddItem: (state, action) => {
      const existingItem = state.ProductsItem.find(
        (item) => item.id === action.payload.ValueProduct.id
      );
      if (existingItem) {
        existingItem.number++;
        existingItem.price +=
          action.payload.ValueProduct.price /
          action.payload.ValueProduct.number;
        state.TotalAmount +=
          action.payload.ValueProduct.price /
          action.payload.ValueProduct.number;
      } else {
        state.TotalAmount +=
          action.payload.ValueProduct.price /
          action.payload.ValueProduct.number;
        state.ProductsItem.push(action.payload.ValueProduct);
      }
      localStorage.setItem("TotalAmount", state.TotalAmount);
      localStorage.setItem("Products", JSON.stringify(state.ProductsItem));
    },
    InBasketRemoveItem: (state, action) => {
      const existingItem = state.ProductsItem.find(
        (item) => item.id === action.payload.ValueProduct.id
      );
      if (existingItem) {
        existingItem.number--;
        existingItem.price -=
          action.payload.ValueProduct.price /
          action.payload.ValueProduct.number;
        state.TotalAmount -=
          action.payload.ValueProduct.price /
          action.payload.ValueProduct.number;
        if (existingItem.number === 0) {
          state.ProductsItem = state.ProductsItem.filter(
            (item) => item.id !== existingItem.id
          );
        }
      }
      localStorage.setItem("TotalAmount", state.TotalAmount);
      localStorage.setItem("Products", JSON.stringify(state.ProductsItem));
    },
  },
});

export const {
  AddItem,
  RemoveItem,
  DeleteItem,
  InBasketAddItem,
  InBasketRemoveItem,
} = ItemsSlice.actions;

export const store = configureStore({
  reducer: {
    products: ItemsSlice.reducer,
  },
});
