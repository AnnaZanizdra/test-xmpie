import { useCallback } from "react";

export const useLocalStorage = () => {
    const setLocalStorage = useCallback((key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    }, []);
    
    const getLocalStorage = useCallback((key: string) => {
        const data = localStorage.getItem(key);
        const list = data ? JSON.parse(data) : [];
        return list;
    }, []);
    return {
        setLocalStorage,
        getLocalStorage,
    }
}