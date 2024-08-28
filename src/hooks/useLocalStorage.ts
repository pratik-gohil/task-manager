import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
 const saved = localStorage.getItem(key);
 const initialValue = saved ? JSON.parse(saved) : defaultValue;
 return initialValue;
}

export const useLocalStorage = <T>(key: string, defaultValue: T): [value: T, setValue: (cb: (value: T) => T) => void] => {
 const [value, setValue] = useState<T>(() => {
  return getStorageValue(key, defaultValue);
 });


 useEffect(() => {
  const storageListener = (e: Event) => {
   const event = (<CustomEvent<T>>e);
   setValue(event.detail)
  }

  window.addEventListener('storage', storageListener);

  return () => {
   window.removeEventListener('storage', storageListener);
  };

 }, [key]);

 const setValueListener = (cb: (value: T) => T) => {
  const newValue = cb(value)
  localStorage.setItem(key, JSON.stringify(newValue));

  let stoageEvent = new CustomEvent<T>("storage", { detail: newValue })
  window.dispatchEvent(stoageEvent);
 }

 return [value, setValueListener];
};