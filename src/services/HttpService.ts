import axios, { AxiosError } from "axios";
import { Store } from "../store";
import { PIXABAY_URL } from "../constants";

const httpService = axios.create({
    baseURL: PIXABAY_URL,
});

export const applyInterceptors = (store: Store) => {
    // in case of error in response we can handle it in future
    httpService.interceptors.response.use(
        (response) => response,
        async (error: AxiosError) => {
            if (error.response && error.response.status) {
                console.warn("Error: ", error.response.data);
                return Promise.reject(error);
            }

            return Promise.reject(error);
        }
    );
}
export const {get, post, put, delete: del} = httpService;
