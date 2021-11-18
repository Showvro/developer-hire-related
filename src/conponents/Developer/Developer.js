import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Developer.css";

//Developer Fuction Start
const Developer = (props) => {
  //Array Distructureing for Developer Paramiter
  const { name, mail, img, profession, skill, salary } = props.developer;

  // console.log(props.developer);

  //Font Awesome Icon Variable Declearing
  const hireIcon = <FontAwesomeIcon icon={faUser} />;

  //return for Developer Function
  return (
    //Developer Info Division
    <div className="developer">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="developer-info">
        <h3 className="info-style">Name: {name}</h3>
        <p className="info-style">E-Mail: {mail}</p>
        <p className="info-style">Profession: {profession}</p>
        <p className="info-style">Skills: {skill}</p>
        <p className="info-style">Salary: {salary}$</p>
      </div>

      <div>
        <button
          onClick={() => props.haldleHire(props.developer)}
          className="btn-hire"
        >
          {hireIcon} Hire
        </button>
      </div>
    </div>
  );
};

export default Developer;
