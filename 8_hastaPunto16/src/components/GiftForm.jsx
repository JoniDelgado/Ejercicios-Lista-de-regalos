import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const portalElement = document.getElementById("modal");

const GiftForm = ({
  setIsOpenForm,
  setGiftForm,
  giftForm,
  setGiftList,
  giftList,
  isEditing,
  numberKey,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGiftForm({ ...giftForm, [name]: value });
  };

  const handleCancelForm = () => {
    setIsOpenForm(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { id, gift, quantity, image, name } = giftForm;

    if (!gift || !name) return alert("Faltan campos por rellenar");

    if (isEditing) {
      const editedList = giftList.map((gift) =>
        gift.id === id ? giftForm : gift
      );
      setGiftList(editedList);
    } else {
      const newITem = {
        id: numberKey,
        gift,
        quantity,
        image: image || "https://acortar.link/mFtbut",
        name,
      };

      setGiftList([...giftList, newITem]);
    }
  };

  return ReactDOM.createPortal(
    <GiftFormContainer onSubmit={handleFormSubmit}>
      <FormCard>
        <h1>{isEditing ? "Editemos el Regalo" : "Agreguemos regalitos"}</h1>
        <input
          type="text"
          placeholder="Regalo"
          name="gift"
          onChange={handleInputChange}
          value={giftForm.gift}
        />
        <input
          type="number"
          name="quantity"
          min="1"
          onChange={handleInputChange}
          value={giftForm.quantity}
        />
        <input
          type="text"
          placeholder="Destinatario"
          name="name"
          onChange={handleInputChange}
          value={giftForm.name}
        />
        <input
          type="url"
          placeholder="URL de imagen"
          name="image"
          onChange={handleInputChange}
          value={giftForm.image}
        />
        <Button color="#29dd29" type="submit">
          {isEditing ? "Editar" : "Agregar"}
        </Button>
        <Button onClick={handleCancelForm}>Cancelar</Button>
      </FormCard>
    </GiftFormContainer>,
    portalElement
  );
};

export default GiftForm;

const GiftFormContainer = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000c1;
`;
const Button = styled.button`
  margin: auto;
  padding: 0.5rem;
  width: 35%;
  background-color: ${({ color }) => (color ? color : "#ff1515")};
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  cursor: pointer;
`;

const FormCard = styled.div`
  padding: 1.5rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  background-image: url("https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/papa-noel-movil.jpg?itok=7x4m0zl3");
  background-position: center;
  background-size: cover;
  background-color: white;
  color: white;

  & input {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
  }

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
