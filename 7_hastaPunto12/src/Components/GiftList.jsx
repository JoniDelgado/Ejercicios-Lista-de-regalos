import React from "react";
import styled from "styled-components";

const GiftList = ({
  giftList,
  handleEmptyList,
  handleDeleteGift,
  handleOpenFormModal,
}) => {
  return (
    <>
      <ListContainer>
        <h1>Lista de Regalos</h1>
        <ul>
          {giftList.map(({ gift, quantity, image, name, id }) => {
            return (
              <div key={id}>
                <img src={image} alt={gift} />
                <li>
                  <p>
                    {gift} x{quantity}
                  </p>
                  <p>{name}</p>
                </li>
                <button onClick={() => handleDeleteGift(id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
                <button onClick={() => handleOpenFormModal(id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                </button>
              </div>
            );
          })}
        </ul>
        <Button onClick={() => handleOpenFormModal()}>Agregar</Button>
        <Button onClick={handleEmptyList}>Vaciar</Button>
      </ListContainer>
    </>
  );
};

export default GiftList;

const ListContainer = styled.div`
  padding: 2rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  right: 5%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  h1 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  div {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  li {
    display: flex;
    flex-direction: column;
  }

  li p:last-child {
    font-size: 0.8rem;
  }

  div button {
    margin-left: 0.5rem;
    padding: 2px 4px;
    border: none;
    border-radius: 5px;
    background-color: #f53939;
    color: #fff;
  }

  div img {
    width: 45px;
    height: 30px;
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  margin: auto;
  padding: 0.5rem;
  width: 30%;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #f53939;

  &:first-of-type {
    margin-bottom: 0.5rem;
    background-color: #14ce14;
  }
`;
