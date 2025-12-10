import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
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
