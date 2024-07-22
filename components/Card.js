import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./card.css";

const Card = ({ name, dist, w, e ,cords}) => {
  return (
    <div className="like-dislike-container">
      <div className="tool-box">
        <button className="btn-close"></button>
      </div>
      <p className="text-content">
        {name}
        <br />
        <a style={{color: '#F18D00'}} target="_blank" 
        href={"https://www.google.com/maps/search/"+cords[0]+",+"+cords[1]+""}>
        <FontAwesomeIcon icon={faLocationDot} height={15} style={{marginRight:"10px"}}/>{dist}</a>
      </p>
      <div className="icons-box">
        <div className="icons">
          <a href={"mailto:" + e} style={{color:"#010101"}}>
            <label className="btn-label" htmlFor="like-checkbox">
              <span className="like-text-content">Email</span>

              <FontAwesomeIcon className="icon" icon={faEnvelope} height={17} />
            </label>
          </a>
        </div>
        <div className="icons">
          <a target="_blank" href={"https://wa.me/91" + w} style={{color:"#25D366"}}>
            <label className="btn-label" htmlFor="dislike-checkbox">

              <FontAwesomeIcon className="icon" icon={faWhatsapp} height={17} />
              <span className="dislike-text-content">Whatsapp</span>
            </label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
