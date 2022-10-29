import React, { useState } from "react";
import "./App.css";

const giftList = [];

function App() {
  const [list, setList] = useState(giftList);
  const [giftForm, setGiftForm] = useState({});

  console.log(list.length);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGiftForm({ [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const item = {
      id: list.length + 1,
      gift: giftForm.gift,
    };

    if (!item.gift) {
      alert("El elemento no puede enviarse vacio");
      return;
    }
    setList([...list, item]);
    setGiftForm("");
  };

  const handleDeleteGift = (id) => {
    const filteredList = list.filter((gift) => {
      return gift.id != id;
    });
    setList(filteredList);
  };

  const handleDeleteAll = (e) => {
    setList(giftList);
  };

  return (
    <>
      <div className="input-card">
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="gift"
            onChange={handleInputChange}
            value={giftForm.gift || ""}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div>LISTA DE NAVIDAD</div>
      <div className="gift-card">
        {list.length === 0 && <p>No hay regalos, agregar aqui</p>}
        <ul>
          {list.map(({ gift, id }) => {
            return (
              <div key={id}>
                <li>{gift}</li>
                <button onClick={() => handleDeleteGift(id)}>Borrar</button>
              </div>
            );
          })}
        </ul>
        <button onClick={handleDeleteAll}>Eliminar todos</button>
      </div>
    </>
  );
}

export default App;
