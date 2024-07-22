import React from "react";
import "./locationCard.css";

const LocationCard = ({ latitude, setLatitude, longitude, setLongitude,par }) => {
  
  const onFetch = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }

  const onUpdate = async() => {
    par()
  }

  return (
    <div className="card">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content">
        <h3>Update Location</h3>

        <div>
          <input
            type="text"
            name="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="location_input"
            placeholder="Latitude"
          ></input>
          <input
            type="text"
            name="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="location_input"
            placeholder="Longitude"
          ></input>
        </div>

        <div>
          <button onClick={onFetch} className="button">
            Fetch Current
          </button>
          <button onClick={onUpdate} className="button">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
