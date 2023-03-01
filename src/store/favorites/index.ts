import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "./types";
import { setFavoriteImage } from "./actions";

const initialState: FavoritesState = {
    list: [],
}
export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(setFavoriteImage.type, (state, { payload }: PayloadAction<number>) => {
            if(!state.list.find((item:number) => item === payload)){
                state.list.push(payload);
            }
           console.log('imageId', payload);
        });

    }
});

export const favoritesReducer = favoritesSlice.reducer;

