import { createSlice } from "@reduxjs/toolkit";
import { ImagesState } from "./types";
import { fetchImagesByQuery } from "./actions";

const initialState: ImagesState = {
    list: [],
    searchString: "",
}
export const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchImagesByQuery.pending, (state) => {

        });
        builder.addCase(fetchImagesByQuery.fulfilled, (state, {payload: {query, data}}) => {
           const imageData:any[] = [];
            console.log('imageData', data);
            if (data.hits.length > 0) {
                data.hits.forEach((image: any) => {
                    imageData.push(image);
                })
            }
             state.list = imageData;
             state.searchString = query;


        });

    }
});

export const imagesReducer = imagesSlice.reducer;

