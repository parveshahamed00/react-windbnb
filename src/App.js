import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import { data } from "./data";
import logo from "./images/logo.avif";

function App() {
  const [cities, setCities] = useState("");

  const handleCityChange = (event) => {
    const selectedCityName = event.target.value;
    setCities(selectedCityName)
  };
  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="logo">
            <div className="nav-logo">
              <img src={logo} alt="" srcset="" />
            </div>
          </div>
          <div className="search">
            <div className="dropdown">
              <select id="city" name="city" onChange={handleCityChange}>
                <option value="">Filter by Cities</option>

                <option value="chennai">Chennai</option>
                <option value="madurai">Madurai</option>
                <option value="tirunelveli">Tirunelveli</option>
                <option value="salem">Salem</option>
              </select>
            </div>
          </div>
        </div>
      </nav>{" "}
      <div className="main">
        <h1>Stays In Tamilnadu</h1>
        <div className="cards">
          {data.filter((e)=>{
            if(cities === ""){
              return e
            }else{
              return e.location.toLowerCase()===cities
            }
          }).map((e) => {
            return (
              <div key={e.id}>
                <Card
                  image={e.image}
                  description={e.description}
                  ratings={e.ratings}
                  type={e.roomType}
                  location={e.location}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
