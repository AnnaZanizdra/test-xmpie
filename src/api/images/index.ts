import React from "react";
import { get } from "../../services/HttpService";
import { PIXABAY_KEY } from "../../constants";

export const getImagesByQuery = (query: React.ReactText) =>
    get("", {
        params: {
            key: PIXABAY_KEY,
            'q': query,
        }
    });
