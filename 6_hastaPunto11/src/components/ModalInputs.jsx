import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalInputs = ({
  handleChangeInput,
  giftForm,
  handleSubmitForm,
  setShowModal,
}) => {
  return ReactDOM.createPortal(
    <ModalContainer>
      <FormModal onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="gift"
          onChange={handleChangeInput}
          value={giftForm.gift}
        />
        <input
          type="number"
          min="1"
          max="10"
          name="giftQuantity"
          onChange={handleChangeInput}
          value={giftForm.giftQuantity}
        />
        <input
          type="url"
          name="image"
          onChange={handleChangeInput}
          value={giftForm.image}
        />
        <CloseButton type="button" onClick={() => setShowModal(false)}>
          Cerrar
        </CloseButton>
        <Button type="submit" value="Agregar"></Button>
      </FormModal>
    </ModalContainer>,
    document.getElementById("modal")
  );
};

export default ModalInputs;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000005e;
`;

const FormModal = styled.form`
  width: 50%;
  max-width: 350px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;

  input:not(:last-child) {
    width: 80%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0 5px 5px 0;
    border: none;
    border-bottom: thin solid rgba(0, 0, 0, 0.149);
    border-right: thin solid rgba(0, 0, 0, 0.149);

    font-size: 1rem;
  }
`;

const Button = styled.input`
  width: 50%;
  margin: 1rem 0 0 0.5rem;
  padding: 0.5rem;
  background-color: #1adf1a;
  border: none;
  color: white;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  width: 50%;
  margin: 1rem 0 0 0.5rem;
  padding: 0.5rem;
  background-color: #ff3b3b;
  color: white;
  border: none;
  border-radius: 5px;
`;
