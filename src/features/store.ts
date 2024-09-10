import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "../utils/shop/reduxCart.jsx";

import cartReducer from "../features/cartSlice.ts";
import productReducer from "../features/product/Product-Slice.js";
import categoriesReducer from "../features/product/categoriesSlice.js";
const persistConfig = { key: "root", storage, blacklist: ["auth"] };
const rootReducer = combineReducers({
  cartUser: cartSlice,
  cart: cartReducer,
  products: productReducer,
  categories: categoriesReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  // this middleware property is only for addressing an internal redux-persist related issue about state and actions serializability...
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
