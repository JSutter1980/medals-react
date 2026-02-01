function Medal({ medalName, count, onIncrement }) {
  return (
    <div>
      {medalName.charAt(0).toUpperCase() + medalName.slice(1)}
    </div>
  );
}

export default Medal;