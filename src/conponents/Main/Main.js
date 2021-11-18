import React, { useEffect, useState } from "react";
import Developer from "../Developer/Developer";
import Hire from "../Hire/Hire";
import "./Main.css";

//Main Function Start
const Main = () => {
  //Use State for Props Data
  const [developers, setDevelopers] = useState([]);

  //Use State for Hire Part
  const [hire, setHire] = useState([]);
  const haldleHire = (developer) => {
    if (hire.indexOf(developer) === -1) {
      const newHire = [...hire, developer];
      setHire(newHire);
    } else {
      alert("Sorry, This Person is already excist in you list.");
    }
  };

  //Use Effect for fetch
  useEffect(() => {
    fetch("./developers.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  //Main Function return
  return (
    <div className="main-container">
      <div className="main-body">
        {developers.map((developer) => (
          <Developer
            developer={developer}
            key={developer._id}
            haldleHire={haldleHire}
          ></Developer>
        ))}
      </div>
      <div>
        <Hire hire={hire}></Hire>
      </div>
    </div>
  );
};

export default Main;
