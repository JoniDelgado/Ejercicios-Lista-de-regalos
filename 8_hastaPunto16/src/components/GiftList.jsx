import React from "react";
import randomGift from "../assets/randomGifts";
import styled from "styled-components";

const GiftList = ({
  setIsOpenForm,
  giftList,
  setGiftList,
  setGiftForm,
  setIsEditing,
  giftForm,
}) => {
  const handleDeleteGift = (id) => {
    const itemToDelete = giftList.filter((gift) => gift.id !== id);
    setGiftList(itemToDelete);
  };

  const handleOpenForm = (id) => {
    setIsOpenForm(true);

    if (id === "edit") {
      const random = Math.floor(Math.random() * randomGift.length);
      const item = randomGift[random];
      setGiftForm({ ...giftForm, gift: item.gift, image: item.image });
    }

    if (typeof id === "number") {
      const itemToEdit = giftList.find((gift) => gift.id === id);
      setGiftForm(itemToEdit);
      setIsEditing(true);
    }
  };

  return (
    <GiftListContainer>
      <h1>Lista de regalos</h1>
      <LittleButton
        leyend={"Generar regalo Random"}
        onClick={() => handleOpenForm("edit")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-gift"
          viewBox="0 0 16 16"
        >
          <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
        </svg>
      </LittleButton>
      <ul>
        {giftList.map(({ id, gift, quantity, image, name }) => {
          return (
            <li key={id}>
              <GiftCard>
                <img src={image} alt={gift} />
                <div>
                  <p>
                    {gift} x {quantity}
                  </p>
                  <p>{name}</p>
                </div>
                <div>
                  <LittleButton onClick={() => handleDeleteGift(id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </LittleButton>
                  <LittleButton onClick={() => handleOpenForm(id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </LittleButton>
                </div>
              </GiftCard>
            </li>
          );
        })}
      </ul>
      <Button color="#29dd29" onClick={() => handleOpenForm()}>
        Agregar
      </Button>
      <Button onClick={() => setGiftList([])}>Vaciar</Button>
    </GiftListContainer>
  );
};

export default GiftList;

const GiftListContainer = styled.div`
  padding: 1.5rem;
  width: 400px;
  position: absolute;
  top: 100px;
  right: 40px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  overflow: hidden;

  h1 {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    margin-bottom: 1.5rem;
    max-height: 250px;
    overflow-y: scroll;
  }

  li {
    list-style: none;
  }
`;

const GiftCard = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & img {
    width: 45px;
    height: 45px;
    object-fit: cover;
  }
`;
const LittleButton = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 0.5rem;
  background-color: red;
  position: relative;
  border: none;
  border-radius: 5px;
  color: white;
  line-height: 1px;
  cursor: pointer;

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: ${({ leyend }) => (leyend ? JSON.stringify(leyend) : null)};
    opacity: 0;
    width: 150px;
    padding: 0.7rem;
    background-color: #00000089;
    position: absolute;
    top: -25px;
    left: -100%;
    border-radius: 5px;
    transition: all ease 0.5s;
  }
`;

const Button = styled.button`
  display: block;
  margin: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 25%;
  background-color: ${({ color }) => (color ? color : "#ff1515")};
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  cursor: pointer;
`;
