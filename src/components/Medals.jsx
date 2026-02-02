function Medal({ medalName, count, onIncrement, onDecrement }) {
  return (
    <div className="medal-display">
      <span className="medal-info">
        {medalName.charAt(0).toUpperCase() + medalName.slice(1)} Medals:
      </span>
      <button 
        className="medal-button" 
        onClick={onDecrement}
        disabled={count === 0}
      >
        -
      </button>
      <span className="medal-count">{count}</span>
      <button className="medal-button" onClick={onIncrement}>+</button>
    </div>
  );
}

export default Medal;