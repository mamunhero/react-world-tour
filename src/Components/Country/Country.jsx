import { useState } from "react";
import "./Country.css";
const Country = ({countryInfo, handleVisitedCountry, handleVisitedFlags}) => {
  // console.log(countryInfo)
  const {name, capital, flags, area, borders, cca3, population } = countryInfo;
  const [visited, setVisited] = useState(false);
  console.log(borders)
  const handleVisited = () => {
    setVisited(!visited);
  }
  

  // console.log(handleVisitedCountry)
  // const passWithParams = () => handleVisitedCountry(countryInfo)
  
  return (
    <div className={`country ${visited ? 'visited' : "non-visited"}`}>
      <h3 style={{color: visited ? "purple" : "black"}}>Name: {name?.common}</h3>
      {/* <img src={flags.png} alt=""/> */}
      <img src={flags.png} alt="" />
      {/* <img src="flags.png" alt="" width="100px" height="50px" /> */}
      <h3>Capital: {capital}</h3>
      <h3>Population:{population}</h3>
      <h3>Area: {area}</h3>
      <h3>Borders: {borders? borders.join(',') : " not found"} </h3>
      <p><small>Code: {cca3}</small></p>
      <button onClick={() => handleVisitedCountry(countryInfo)}>Mark Visited</button>
      <br />
      <br />
      <button onClick={() => handleVisitedFlags(countryInfo.flags.png) }>Add Flag</button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;


