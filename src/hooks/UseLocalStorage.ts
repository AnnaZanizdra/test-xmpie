import { useCallback } from "react";

export const UseLocalStorage = () => {
    // store in local storage by key
    const setLocalStorage = useCallback((key: string, value: string|[]) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error: any) {
            // If error  show it
            console.log(error);
        }
    }, []);

    // Get data from local storage by key
    const getLocalStorage = useCallback((key: string) => {
        try {
            const data = localStorage.getItem(key);
            const list = data ? JSON.parse(data) : [];
            return list;
        } catch (error: any) {
            // If error  return empty string
            console.log(error);
            return '';
        }
    }, []);
    return {
        setLocalStorage,
        getLocalStorage,
    }
}