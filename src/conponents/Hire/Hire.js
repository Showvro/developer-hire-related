import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Hire.css";

//Font Awesome Icon Variable Declearing
const hireConfirm = <FontAwesomeIcon icon={faCheck} />;
const hireCancel = <FontAwesomeIcon icon={faTimes} />;

//Hire Function Start
const Hire = (props) => {
  //Hire Array Distructuring
  const { hire } = props;
  //Total Hire Loop
  let totalHire = 0;
  for (const developer of hire) {
    totalHire = totalHire + developer.salary;
  }

  //Hire Fucntion Return
  return (
    <div className="hire selected-name">
      <h3>Total Developer Selected:</h3>
      <h4>Developer Selected: {props.hire.length}</h4>
      <ul>
        {hire.map((developer) => (
          <li className="hire-person" key={developer._id}>
            {developer.name}
          </li>
        ))}
      </ul>
      <h4>Total Cost: {totalHire.toFixed(2)}$</h4>
      <button className="hire-btn">{hireConfirm} Confirm</button>
      <button className="cancel-btn">{hireCancel} Close</button>
    </div>
  );
};

export default Hire;
