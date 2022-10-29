import React from "react";

export const GiftList = ({ giftList }) => {
  return (
    <>
      <div id="gift-card">
        <div>LISTA DE REGALOS NAVIDAD</div>
        <ul>
          {giftList.map((gift, ind) => {
            return <li key={ind}>{gift}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
