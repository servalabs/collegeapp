"use client";

import React, { useState,useEffect } from "react";
// import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import LocationCard from "@/components/LocationCard";
import "./nearby.css";
function deg2rad(deg) {
  return deg * (Math.PI/180)
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}
function perfectdistane(val){
  val = Math.abs(val)
  if (val<1){
    return parseInt(val*1000)+"M"
  }else{
    return val.toFixed(3)+"km"
  }
}
const NearBy = ({ser,email,upd}) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [persnolcord,setcords]=useState([])
  // console.log(email)
  const [peoples,setit]=useState([]);

  // Location Data
  const data = {
    latitude,
    longitude
  }

  async function par(){
    const res= await upd([latitude,longitude])
    console.log(res)
    if(res[0]){
      location.reload();
    }else{
      alert('Unable to update location: '+res[1])
    }
  }
  useEffect(() => {
    const rs =  ser(2.2);
    console.log(rs)
    rs.then(data=>{
      console.log(data)
      
      let show = data.filter(e=>{
        if(e.email === email){
          setcords(e.coordinates)
          return false;
        }
        return true;
      })
      setit( show)
    // console.log(data)
  });
  
  }, []);
  return (
    <div>
      <div className="nearby-container">
        <LocationCard
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          par={par}
        />
        {peoples.map((person,i)=>{
          // console.log(person.distance.coordinates)
          return(
            
            <Card key={i} name={person.name} e={person.email} dist={perfectdistane(getDistanceFromLatLonInKm(...person.coordinates,...persnolcord))}
            w={person.phone} cords={person.coordinates}/>
          )
        })}
      </div>
    </div>
  );
};

export default NearBy;
