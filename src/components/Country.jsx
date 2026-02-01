import { useState } from "react";
import Medal from "./Medals";

function Country({ id, name, gold, silver, bronze, medals, onDelete }) {
  const [medalCounts, setMedalCounts] = useState({
    gold: gold,
    silver: silver,
    bronze: bronze
  });

  function handleMedalClick(medalName) {
    setMedalCounts({
      ...medalCounts,
      [medalName]: medalCounts[medalName] + 1
    });
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <div className="country-card">
      <div className="country-name">{name}</div>
      
      {medals.map((medal) => (
        <Medal
          key={medal.id}
          medalName={medal.name}
          count={medalCounts[medal.name]}
          onIncrement={() => handleMedalClick(medal.name)}
        />
      ))}
      
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Country;