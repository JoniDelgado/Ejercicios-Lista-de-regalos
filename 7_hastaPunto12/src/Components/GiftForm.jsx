import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const portalNode = document.getElementById("modal");

const GiftForm = ({
  handleInputChange,
  handleFormSubmit,
  giftForm,
  handleExitForm,
  isEditing,
}) => {
  return ReactDOM.createPortal(
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        {isEditing ? (
          <h1>Editemos el regalo</h1>
        ) : (
          <h1>Agreguemos regalitos</h1>
        )}
        <input
          type="text"
          name="gift"
          value={giftForm.gift}
          onChange={handleInputChange}
          placeholder="Ingrese regalo"
        />
        <input
          type="number"
          name="quantity"
          value={giftForm.quantity}
          onChange={handleInputChange}
          min="1"
          max="10"
        />
        <input
          type="url"
          name="image"
          value={giftForm.image}
          onChange={handleInputChange}
          placeholder="Url de la imagen"
        />
        <input
          type="text"
          name="name"
          value={giftForm.name}
          onChange={handleInputChange}
          placeholder="Destinatario"
        />
        {isEditing ? (
          <button type="submit">Editar</button>
        ) : (
          <button type="submit">Agregar</button>
        )}
        <button type="button" onClick={handleExitForm}>
          Cancelar
        </button>
      </Form>
    </FormContainer>,
    portalNode
  );
};

export default GiftForm;

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000a9;
`;

const Form = styled.form`
  width: 30%;
  max-width: 500px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  background-image: url("https://www.vmcdn.ca/f/files/shared/miscellaneous-stock-images/rock-n-roll-santa.jpeg;w=1200;h=800;mode=crop");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  h1 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  input {
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #0000008f;
    color: #fff;
  }

  input::placeholder {
    color: #cfcfcf;
    font-style: italic;
  }

  button {
    margin: auto;
    padding: 0.5rem;
    width: 30%;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #14ce14;
  }

  button:last-child {
    background-color: #f53939;
  }
`;
