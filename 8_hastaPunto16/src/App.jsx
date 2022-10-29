import { useState, useEffect } from "react";
import styled from "styled-components";
import GiftList from "./components/GiftList";
import GiftForm from "./components/GiftForm";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

const initialForm = { gift: "", quantity: 1, name: "", image: "" };

function App() {
  const [storage, setStorage] = useLocalStorage("gift");
  const [giftForm, setGiftForm] = useState(initialForm);
  const [giftList, setGiftList] = useState(storage);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [numberKey, setNumberKey] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setStorage(giftList);
    setIsOpenForm(false);
    setIsEditing(false);
    setNumberKey(numberKey + 1);
  }, [giftList]);

  useEffect(() => {
    if (!isOpenForm) {
      setGiftForm(initialForm);
      setIsEditing(false);
    }
  }, [isOpenForm]);

  return (
    <AppContainer>
      <GiftList
        setIsOpenForm={setIsOpenForm}
        giftList={giftList}
        setGiftList={setGiftList}
        setGiftForm={setGiftForm}
        giftForm={giftForm}
        setIsEditing={setIsEditing}
      />
      {isOpenForm && (
        <GiftForm
          isEditing={isEditing}
          giftList={giftList}
          setGiftList={setGiftList}
          setIsOpenForm={setIsOpenForm}
          setGiftForm={setGiftForm}
          giftForm={giftForm}
          numberKey={numberKey}
        />
      )}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://psicologiaoptima.es/wp-content/uploads/2019/12/navidad0.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
