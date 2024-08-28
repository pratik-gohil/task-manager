import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
 const saved = localStorage.getItem(key);
 const initialValue = saved ? JSON.parse(saved) : defaultValue;
 return initialValue;
}

export const useLocalStorage = <T>(key: string, defaultValue: T): [value: T, setValue: React.Dispatch<React.SetStateAction<T>>] => {
 const [value, setValue] = useState<T>(() => {
  return getStorageValue(key, defaultValue);
 });

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
 }, [key, value]);

 return [value, setValue];
};