import React from "react";
import axios from "axios";
import { PIXABAY_KEY } from "../constants";

export const getImagesByQuery = async(query: React.ReactText) =>
    axios.get("https://pixabay.com/api/", {
        params: {
            key: PIXABAY_KEY,
            'q': query,
        }
    }).then(function (response) {
        return response.data;
    });
