import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

const initialFormValue = { gift: "", giftQuantity: 1, image: "" };

function App() {
  const [localData, setLocalData] = useLocalStorage("gift");
  const [giftKey, setGiftKey] = useState(1);
  const [giftForm, setGiftForm] = useState(initialFormValue);
  const [giftList, setGiftList] = useState(localData);

  useEffect(() => {
    setLocalData(giftList);
    setGiftForm(initialFormValue);
    setGiftKey(giftKey + 1);
  }, [giftList]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setGiftForm({ ...giftForm, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { gift, giftQuantity, image } = giftForm;

    if (!gift || !image) return alert("Hay campos incompletos");

    const repeatedGift = giftList.find((gift) => gift.gift === giftForm.gift);

    if (repeatedGift) {
      repeatedGift.giftQuantity += Number(giftForm.giftQuantity);
      const newList = [...giftList];
      setGiftList(newList);
    } else {
      const newGift = {
        id: giftKey,
        gift,
        giftQuantity,
        image,
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
    <div className="App">
      <div className="form-card">
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="gift"
            value={giftForm.gift}
            onChange={handleChangeInput}
          />
          <input
            type="number"
            min="1"
            max="10"
            name="giftQuantity"
            value={giftForm.giftQuantity}
            onChange={handleChangeInput}
          />
          <input
            type="url"
            name="image"
            value={giftForm.image}
            onChange={handleChangeInput}
          />
          <input type="submit" />
        </form>
      </div>
      <div className="list-card">
        LISTA DE NAVIDAD
        <ul>
          {giftList.map(({ gift, giftQuantity, id, image }) => {
            return (
              <>
                <img src={image} alt={gift} style={{ width: "50px" }} />
                <div key={id}>
                  <li>
                    {gift} X{giftQuantity}
                    <button onClick={() => handleDeleteGift(id)}>X</button>
                  </li>
                </div>
              </>
            );
          })}
        </ul>
        <button onClick={handleEmptyList}>Borrar Lista</button>
      </div>
    </div>
  );
}

export default App;
