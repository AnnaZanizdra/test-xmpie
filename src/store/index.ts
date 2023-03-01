import { configureStore, } from "@reduxjs/toolkit";
import { EqualityFn, useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { imagesReducer } from "./images";
import { favoritesReducer } from "./favorites";
import logger from "redux-logger";

const middlewares = [];

if (process.env.REACT_APP_ENVIRONMENT === "dev") {
    middlewares.push(logger);
}
export const store = configureStore({
    reducer: {
        images: imagesReducer,
        favorites: favoritesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

export type Store = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
type useSelectorT = <TState = RootState, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: EqualityFn<Selected> | undefined) => Selected;
export const useDispatch = () => useAppDispatch<AppDispatch>();

export const useSelector: useSelectorT = useAppSelector;
