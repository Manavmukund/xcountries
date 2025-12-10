import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountries-backend.labs.crio.do/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries"); // Required for Cypress test
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container">
      {/* <h1 className="title">Country List</h1> */}

      <div className="grid">
        {countries.map((country) => (
          <div key={country.name} className="card" >
            <img src={country.flag} alt="flag" className="flag" />
            <h3>{country.name}</h3>
            {/* <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
