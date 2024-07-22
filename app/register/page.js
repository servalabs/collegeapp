
import { cookies } from 'next/headers'

import animationData from "./bg-animation.json";
import DBconn from "@/db/dbconn";
import User from "@/models/Users";
import "./page.css";
import Register from "@/components/pages/Register";
export default function Home() {
const ser=async (data) => {
  "use server"
// console.log(data)
try {
  await DBconn();
  const user = new User(data);
  const res = await user.save();
  cookies().set('email',res.email),{maxAge:60*60*24*28};
  cookies().set('location',res.location.coordinates),{maxAge:60*60*24*28};

  return [true,data,res]
} catch (error) { 
  return [false,data,error.message]
  
}
}



return <Register ser={ser} animationData={animationData}/>
}