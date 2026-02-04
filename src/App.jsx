import { useState } from "react";
import Country from "./components/Country";
import NewCountry from "./components/NewCountry";
import './App.css'

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: 'France', gold: 0, silver: 2, bronze: 2 },
  ]);

  const deleteCountry = (id) => {
    setCountries(countries.filter(country => country.id !== id));
  };

  const handleIncrement = (id, medalType) => {
    setCountries(countries.map(country => 
      country.id === id 
        ? { ...country, [medalType]: country[medalType] + 1 }
        : country
    ));
  };

  const handleDecrement = (id, medalType) => {
    setCountries(countries.map(country => 
      country.id === id 
        ? { ...country, [medalType]: Math.max(0, country[medalType] - 1) }
        : country
    ));
  };

  const addCountry = (newCountry) => {
    const newId = countries.length > 0 ? Math.max(...countries.map(c => c.id)) + 1 : 1;
    setCountries([...countries, {
      id: newId,
      name: newCountry.name,
      gold: newCountry.gold,
      silver: newCountry.silver,
      bronze: newCountry.bronze
    }]);
  };

  const totalAllMedals = countries.reduce((total, country) => {
    return total + country.gold + country.silver + country.bronze;
  }, 0);

  return (
    <div>
      <h1>Olympic Medals</h1>
      <div className="total-all-medals">Total Medals (All Countries): {totalAllMedals}</div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country 
            key={country.id}
            id={country.id}
            name={country.name}
            gold={country.gold}
            silver={country.silver}
            bronze={country.bronze}
            onDelete={deleteCountry}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
      <div className="add-country-container">
        <NewCountry onAdd={addCountry} />
      </div>
    </div>
  );
}

export default App;