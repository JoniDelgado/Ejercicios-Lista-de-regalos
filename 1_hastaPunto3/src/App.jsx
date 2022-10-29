import React, { useState } from "react";
import "./App.css";
import { GiftList } from "./components/GiftList";

const gifts = [
  "juguetes",
  "Patinete Electrico",
  "Sweater de navidad",
  "Pijamas",
];

function App() {
  const [giftList, setGiftList] = useState(gifts);
  const [giftName, setGiftName] = useState("");

  console.log(giftName);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setGiftName({ [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!giftName) return;

    const gift = giftName.gift;
    setGiftList([...giftList, gift]);

    setGiftName("");
  };

  return (
    <section id="app">
      <div id="gift-container">
        <div id="input">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="gift"
              value={giftName.gift || ""}
              onChange={handleOnChange}
            />
            <button type="submit"></button>
          </form>
        </div>

        <GiftList giftList={giftList} />
      </div>
    </section>
  );
}

export default App;
