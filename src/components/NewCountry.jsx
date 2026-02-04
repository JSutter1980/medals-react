import { useState } from "react";

function NewCountry({ onAdd }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [goldCount, setGoldCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCountryName("");
    setGoldCount(0);
    setSilverCount(0);
    setBronzeCount(0);
  };

  const handleCountryNameChange = (e) => {
    const value = e.target.value;
    
    // If the input is empty or starts with a space, don't allow it
    if (value === '' || (value.startsWith(' ') && countryName === '')) {
      setCountryName('');
    } else {
      setCountryName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (countryName.trim()) {
      onAdd({
        name: countryName.trim(),
        gold: goldCount,
        silver: silverCount,
        bronze: bronzeCount
      });
      closeDialog();
    }
  };

  // Check if the form is valid
  const isFormValid = countryName.trim().length > 0;

  return (
    <div>
      <button onClick={openDialog} className="trigger-button">
        Add New Country
      </button>

      {isDialogOpen && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Country</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Country name"
                value={countryName}
                onChange={handleCountryNameChange}
                className="country-input"
                autoFocus
              />
              
              <div className="medal-input-group">
                <label htmlFor="gold-input">Gold Medals:</label>
                <input
                  id="gold-input"
                  type="number"
                  placeholder="0"
                  value={goldCount}
                  onChange={(e) => setGoldCount(parseInt(e.target.value) || 0)}
                  min="0"
                  className="medal-input"
                />
              </div>

              <div className="medal-input-group">
                <label htmlFor="silver-input">Silver Medals:</label>
                <input
                  id="silver-input"
                  type="number"
                  placeholder="0"
                  value={silverCount}
                  onChange={(e) => setSilverCount(parseInt(e.target.value) || 0)}
                  min="0"
                  className="medal-input"
                />
              </div>

              <div className="medal-input-group">
                <label htmlFor="bronze-input">Bronze Medals:</label>
                <input
                  id="bronze-input"
                  type="number"
                  placeholder="0"
                  value={bronzeCount}
                  onChange={(e) => setBronzeCount(parseInt(e.target.value) || 0)}
                  min="0"
                  className="medal-input"
                />
              </div>

              <div className="dialog-buttons">
                <button 
                  type="submit" 
                  className="add-button"
                  disabled={!isFormValid}
                >
                  Add Country
                </button>
                <button type="button" onClick={closeDialog} className="cancel-button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewCountry;