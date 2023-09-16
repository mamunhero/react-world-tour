import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = ([]);
  useEffect( ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => setCountries(data));
  }, [])


  const handleVisitedCountry = (countryInfo) => {
    // console.log("add this to your visited country");
    // console.log(countryInfo)
    const newVisitedCountries = [...visitedCountries, countryInfo];
    setVisitedCountries(newVisitedCountries);
  }
  const handleVisitedFlags = (flags) => {
    console.log("flag adding")
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  }
  return (
    <div>
      {/* visited country */}
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
            {
              visitedCountries.map(countryInfo => <li key={countryInfo.cca3}>{countryInfo.name.common}</li>)
            }
        </ul>
      </div>
      {/* display Countries */}
      <div className="country-container">
        {
          countries.sort((a,b)=>{
            // console.log(a,b)
            return a.name.common.localeCompare(b.name.common)
            
          }).map(countryDetails => 
          <Country 
              key={countryDetails} 
              handleVisitedCountry={handleVisitedCountry}
              handleVisitedFlags={handleVisitedFlags}
              countryInfo={countryDetails}>
          </Country>)
        }
      </div>
    </div>
  );
};

export default Countries;