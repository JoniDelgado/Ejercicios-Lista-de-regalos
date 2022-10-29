import { useState, useEffect } from "react";
import styled from "styled-components";
import GiftList from "./Components/GiftList";
import GiftForm from "./Components/GiftForm";
import "./App.css";

const initialFormValue = { gift: "", quantity: 1, image: "", name: "" };

const checkLocalStorage = () => {
  const local = localStorage.getItem("gifts");
  if (local) {
    return JSON.parse(local);
  } else {
    const newLocal = [];
    return localStorage.setItem("gifts", JSON.stringify(newLocal));
  }
};

function App() {
  const [giftForm, setGiftForm] = useState(initialFormValue);
  const [giftKey, setGiftKey] = useState(1);
  const [giftList, setGiftList] = useState(checkLocalStorage);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(giftList));
    setGiftForm(initialFormValue);
    setIsModalVisible(false);
    setIsEditing(false);
    setGiftKey(giftKey + 1);
  }, [giftList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGiftForm({ ...giftForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const NOT_IMAGE =
      "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";

    const { gift, quantity, image, name } = giftForm;

    if (!gift) return alert("Debes agregar un regalo");
    if (!name) return alert("Debes agregar un destinatario");

    if (isEditing) {
      const editedList = giftList.map((gift) =>
        gift.id === giftForm.id ? giftForm : gift
      );
      setGiftList(editedList);
    } else {
      const item = {
        id: giftKey,
        gift,
        quantity,
        name,
        image: image || NOT_IMAGE,
      };

      setGiftList([...giftList, item]);
    }
  };

  const handleDeleteGift = (id) => {
    const filteredList = giftList.filter((gift) => gift.id !== id);
    setGiftList(filteredList);
  };

  const handleEmptyList = () => {
    setGiftList([]);
  };

  const handleExitForm = () => {
    setGiftForm(initialFormValue);
    setIsModalVisible(false);
    setIsEditing(false);
  };

  const handleOpenFormModal = (id) => {
    setIsModalVisible(true);
    if (id) {
      setIsEditing(true);
      const edtiGifit = giftList.find((gift) => gift.id === id);
      setGiftForm(edtiGifit);
    }
  };

  return (
    <AppContainer>
      <GiftList
        giftList={giftList}
        handleEmptyList={handleEmptyList}
        handleDeleteGift={handleDeleteGift}
        handleOpenFormModal={handleOpenFormModal}
      />
      {isModalVisible && (
        <GiftForm
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          giftForm={giftForm}
          handleExitForm={handleExitForm}
          isEditing={isEditing}
        />
      )}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  max-width: 1280px;
  background-image: url("https://www.solofondos.com/wp-content/uploads/2021/08/3.jpg");
  background-size: cover;
  position: relative;
`;
