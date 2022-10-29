import { useState, useEffect } from "react";

const initialValue = { gift: "", giftQuantity: 1 };
const initialListValue = JSON.parse(localStorage.getItem("gift")) || [];

function App() {
  const [giftKey, setGiftKey] = useState(1);
  const [formGift, setFormGift] = useState(initialValue);
  const [list, setList] = useState(initialListValue);

  useEffect(() => {
    localStorage.setItem("gift", JSON.stringify(list));
  }, [list]);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormGift({ ...formGift, [name]: value });
  };

  const handleAddGift = (e) => {
    e.preventDefault();

    if (!formGift.gift) return alert("Tienes que agrear un regalo");

    const repeatedGift = list.find((gift) => gift.gift === formGift.gift);
    if (repeatedGift) {
      repeatedGift.giftQuantity += Number(formGift.giftQuantity);
      const newList = [...list];
      setList(newList);
    } else {
      const newGift = {
        id: giftKey,
        gift: formGift.gift,
        giftQuantity: formGift.giftQuantity,
      };

      setList([...list, newGift]);
    }

    setFormGift(initialValue);
    setGiftKey(giftKey + 1);
  };

  const handleDeleteGift = (id) => {
    const filteredList = list.filter((gift) => gift.id !== id);
    setList(filteredList);
  };

  const handleEmptyGift = () => setList([]);

  return (
    <div className="App">
      <div className="card-inputs">
        <form onSubmit={handleAddGift}>
          <input
            type="text"
            name="gift"
            value={formGift.gift}
            onChange={handleChangeForm}
          />
          <input
            type="number"
            name="giftQuantity"
            min="1"
            max="10"
            value={formGift.giftQuantity}
            onChange={handleChangeForm}
          />
          <input type="submit" value="Agregar" />
        </form>
      </div>
      <div className="card-list">
        Lista de Navidad
        <div className="list-wrapper">
          <ul>
            {list.map((gift) => {
              return (
                <div key={gift.id}>
                  <li>
                    {gift.gift} x{gift.giftQuantity}
                    <button onClick={() => handleDeleteGift(gift.id)}>X</button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <button onClick={handleEmptyGift}>Vaciar Lista</button>
      </div>
    </div>
  );
}

export default App;
