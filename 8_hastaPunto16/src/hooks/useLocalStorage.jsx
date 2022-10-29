import { useState } from "react";

const useLocalStorage = (localName) => {
  const checkLocal = () => {
    const item = localStorage.getItem(localName);
    if (item) {
      return JSON.parse(item);
    } else {
      return localStorage.setItem(localName, JSON.stringify([]));
    }
  };

  const [local, setLocal] = useState(checkLocal);

  const setStorage = (data) => {
    setLocal(data);
    localStorage.setItem(localName, JSON.stringify(data));
  };
  const storage = local;

  return [storage, setStorage];
};

export default useLocalStorage;
