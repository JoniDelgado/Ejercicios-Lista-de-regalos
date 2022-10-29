import React from "react";
import styled from "styled-components";

const GiftList = ({
  giftList,
  handleDeleteGift,
  handleEmptyList,
  setShowModal,
  showModal,
}) => {
  return (
    <ListWrapper>
      <h1>Regalos De Navidad</h1>
      <ul>
        {giftList.map(({ gift, id, image, giftQuantity }) => {
          return (
            <ListContainer key={id}>
              <img src={image} alt={gift} />
              <li>
                {gift} x{giftQuantity}
              </li>
              <DeleteButton onClick={() => handleDeleteGift(id)}>
                Borrar
              </DeleteButton>
            </ListContainer>
          );
        })}
      </ul>
      <Button onClick={() => setShowModal(!showModal)}>Agregar</Button>
      <Button onClick={handleEmptyList}>Borrar Lista</Button>
    </ListWrapper>
  );
};

export default GiftList;

const ListWrapper = styled.div`
  width: 50%;
  padding: 1.5rem;
  border-radius: 5px;
  text-align: center;
  background-color: #e2e2e2;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  ul {
    list-style: none;
  }
`;

const ListContainer = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 5px;
    width: 50px;
  }

  li {
    margin-right: 5px;
  }
`;

const Button = styled.button`
  width: 40%;
  margin-left: 0.2rem;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: none;
  border: thin solid black;
  border-radius: 5px;
`;

const DeleteButton = styled(Button)`
  width: 25%;
  margin-top: 0;
`;
