import { useState, useEffect } from "react";

const initialGiftList = [];

function App() {
  const [counterKey, setCounterKey] = useState(1);
  const [list, setList] = useState(initialGiftList);
  const [giftForm, setGiftForm] = useState({ gift: "", quantity: 1 });

  useEffect(() => {
    setGiftForm({ gift: "", quantity: 1 });
    setCounterKey(counterKey + 1);
  }, [list]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGiftForm({ ...giftForm, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);

    if (!giftForm.gift) return alert("Por favor, agregue un regalo");

    const isRepeated = list.find((gift) => gift.gift === giftForm.gift);

    if (isRepeated) {
      isRepeated.quantity += Number(giftForm.quantity);
      const newList = [...list];
      setList(newList);
    } else {
      const item = {
        id: counterKey,
        gift: giftForm.gift,
        quantity: Number(giftForm.quantity),
      };
      setList([...list, item]);
    }
  };

  const handleDeleteGift = (id) => {
    const filteredList = list.filter((gift) => {
      return gift.id !== id;
    });
    setList(filteredList);
  };

  const handleDeleteAll = () => {
    setList(initialGiftList);
  };

  return (
    <div className="App">
      <div className="giftform">
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="gift"
            onChange={handleInputChange}
            value={giftForm.gift || ""}
          />
          <input
            type="number"
            name="quantity"
            min={1}
            max={10}
            value={giftForm.quantity}
            onChange={handleInputChange}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
      <div className="gifts-card">
        LISTA DE NAVIDAD
        {list.length === 0 && <p>No hay regalos, agrega aqui</p>}
        <ul>
          {list.map(({ gift, id, quantity }) => {
            return (
              <div key={id}>
                <li>
                  {gift} x {quantity}
                </li>
                <button onClick={(e) => handleDeleteGift(id)}>eliminar</button>
              </div>
            );
          })}
        </ul>
        <button onClick={handleDeleteAll}>Eliminar todo</button>
      </div>
    </div>
  );
}

export default App;
