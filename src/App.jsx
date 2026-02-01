import { useState, useRef } from "react";
import Country from "./components/Country";
import './App.css'

function App() {
  const medals = useRef([
    { id: 1, name: "gold medals: " },
    { id: 2, name: "silver medals: " },
    { id: 3, name: "bronze medals: " },
  ]);

  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 3 },
    { id: 2, name: 'China', gold: 3, silver: 2, bronze: 1 },
    { id: 3, name: 'France', gold: 0, silver: 1, bronze: 2 },
  ]);

  const deleteCountry = (id) => {
    setCountries(countries.filter(country => country.id !== id));
  };

  return (
    <div>
      {countries.map((country) => (
        <Country 
          key={country.id}
          id={country.id}
          name={country.name}
          gold={country.gold}
          silver={country.silver}
          bronze={country.bronze}
          medals={medals.current}
          onDelete={deleteCountry}
        />
      ))}
    </div>
  );
}

export default App;