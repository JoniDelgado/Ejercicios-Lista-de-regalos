import { useState } from "react";

const useLocalStorage = (localName) => {
  const getFromLocal = () => {
    const localData = localStorage.getItem(localName);
    if (localData) {
      const item = JSON.parse(localData);
      return item;
    } else {
      return [];
    }
  };

  const [stored, setStored] = useState(getFromLocal);

  const setLocalData = (data) => {
    setStored(data);
  };
  localStorage.setItem(localName, JSON.stringify(stored));
  const localData = stored;

  return [localData, setLocalData];
};

export default useLocalStorage;
