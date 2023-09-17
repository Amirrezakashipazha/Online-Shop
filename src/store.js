import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "products",
  initialState: { ProductsItem: [], TotalAmount: 0 },
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
    },
    DeleteItem: (state, action) => {
      const existingItem = state.ProductsItem.find(
        (item) => item.id === action.payload.ValueProduct.id
      );
      if (existingItem) {
        state.TotalAmount -= action.payload.ValueProduct.price;
        existingItem.number=0;
        existingItem.price =0;
        if (existingItem.number === 0) {
          state.ProductsItem = state.ProductsItem.filter(
            (item) => item.id !== existingItem.id
          );
        }
      }
    },
  },
});

export const { AddItem, RemoveItem ,DeleteItem} = ItemsSlice.actions;

export const store = configureStore({
  reducer: {
    products: ItemsSlice.reducer,
  },
});
