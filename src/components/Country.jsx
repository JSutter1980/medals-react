import { useState } from "react";

function Country({ id, name, gold, onDelete }) {
  const [goldCount, setGoldCount] = useState(gold);

  function handleClick() {
    setGoldCount(goldCount + 1);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <div className="country-card">
      <div className="country-name">{name}</div>
      <div className="medal-count">Gold Medals:{goldCount}</div>
      <button className="medal-button" onClick={handleClick}>+</button>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Country;