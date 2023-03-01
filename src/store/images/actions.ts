import { createAsyncThunk } from "@reduxjs/toolkit";
import { getImagesByQuery } from "../../api/images";
// get images from 3d API
export const fetchImagesByQuery = createAsyncThunk("images/fetchImagesByQuery",
    async (query: string, {rejectWithValue}) => {
        try {
            if (query.length > 0) {
                // call pixabay.com
                const {data} = await getImagesByQuery(query);
                // return response data  and query
                return {
                    query,
                    data
                };
            } else {
                return {
                    query,
                    data: []
                };
            }

        } catch (error: any) {
            return rejectWithValue(error.data);
        }

    }
);