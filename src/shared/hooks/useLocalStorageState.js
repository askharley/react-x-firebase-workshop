import { useEffect, useState } from 'react';

export const useLocalStorageState = (name, initialValue) => {
  const initialStoredValue = window.localStorage.getItem(name) !== undefined ? JSON.parse(window.localStorage.getItem(name)) : initialValue;

  const [value, setValue] = useState(initialStoredValue);

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
}
