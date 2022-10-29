import { useState, useEffect } from "react";
import styled from "styled-components";
import ModalInputs from "./components/ModalInputs";
import GiftList from "./components/GiftList";
import "./App.css";

const initialFormValue = { gift: "", image: "", giftQuantity: 1 };

const checkLocalStorage = () => {
  const fromLocal = localStorage.getItem("gifts");

  if (fromLocal) {
    return JSON.parse(fromLocal);
  } else {
    return localStorage.setItem("gifts", JSON.stringify([]));
  }
};

function App() {
  const [giftForm, setGiftForm] = useState(initialFormValue);
  const [giftList, setGiftList] = useState(checkLocalStorage);
  const [showModal, setShowModal] = useState(false);
  const [giftKey, setGiftKey] = useState(1);

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(giftList));
    setGiftForm(initialFormValue);
    setShowModal(false);
    setGiftKey(giftKey + 1);
  }, [giftList]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setGiftForm({ ...giftForm, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const { gift, image, giftQuantity } = giftForm;

    if (!gift) return alert("Debes agregar un regalo");

    const repeatedGift = giftList.find((gift) => gift.gift === giftForm.gift);

    if (repeatedGift) {
      repeatedGift.giftQuantity += Number(giftForm.giftQuantity);
      const changedGift = [...giftList];
      setGiftList(changedGift);
    } else {
      const newGift = {
        id: giftKey,
        gift,
        image:
          image ||
          "https://sm.ign.com/t/ign_es/feature/t/the-rings-/the-rings-of-power-why-gandalf-probably-isnt-in-the-lord-of_9kds.1280.jpg",
        giftQuantity,
      };

      setGiftList([...giftList, newGift]);
    }
  };

  const handleDeleteGift = (id) => {
    const filteredList = giftList.filter((gift) => gift.id !== id);
    setGiftList(filteredList);
  };

  const handleEmptyList = () => {
    setGiftList([]);
  };

  return (
    <AppWrapper>
      {showModal && (
        <ModalInputs
          handleSubmitForm={handleSubmitForm}
          giftForm={giftForm}
          handleChangeInput={handleChangeInput}
          setShowModal={setShowModal}
        />
      )}
      <GiftList
        giftList={giftList}
        handleEmptyList={handleEmptyList}
        handleDeleteGift={handleDeleteGift}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url("https://img.freepik.com/vector-gratis/letras-feliz-navidad-brillantes-confeti-brillantes-adornos_1262-16808.jpg?w=2000");
  background-repeat: no-repeat;
  background-size: cover;
`;
