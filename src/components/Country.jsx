import Medal from "./Medals";

function Country({ id, name, gold, silver, bronze, onDelete, onIncrement, onDecrement }) {
  const totalMedals = gold + silver + bronze;

  function handleDelete() {
    onDelete(id);
  }

  return (
    <div className="country-card">
      <div className="country-header">
        <div className="country-name">{name}</div>
        <div className="country-total">Total: {totalMedals}</div>
      </div>
      <div className="medals-section">
        <Medal 
          country={name} 
          medalName="gold" 
          count={gold} 
          onIncrement={() => onIncrement(id, 'gold')}
          onDecrement={() => onDecrement(id, 'gold')}
        />
        <Medal 
          country={name} 
          medalName="silver" 
          count={silver} 
          onIncrement={() => onIncrement(id, 'silver')}
          onDecrement={() => onDecrement(id, 'silver')}
        />
        <Medal 
          country={name} 
          medalName="bronze" 
          count={bronze} 
          onIncrement={() => onIncrement(id, 'bronze')}
          onDecrement={() => onDecrement(id, 'bronze')}
        />
      </div>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Country;