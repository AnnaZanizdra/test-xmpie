import { createAction } from "@reduxjs/toolkit";

export const setFavoriteImage = createAction<number>(
    "favorites/setFavoriteImage"
);