import Login from "@/components/pages/Login";
import React from 'react'
import DBconn from "@/db/dbconn";
import mongoose from "mongoose";
import User from "@/models/Users";
import { cookies } from "next/headers";
const page = () => {
  async function ser(data){
    "use server";
    // return [true]
    try {
      
      // await DBconn();
      await mongoose.connect("mongodb+srv://pixel:sdgbfhsdgfyusdfuy@myatlasclusteredu.lwtmj66.mongodb.net/finder",{useNewUrlParser:true,  useUnifiedTopology: true,});
      return [true,'dbcon']
   
      const res = await User.find({email:data.email, password:data.password})
      if(res.length>0){
        cookies().set('email',res[0].email),{maxAge:60*60*24*28};
        cookies().set('location',res[0].location.coordinates),{maxAge:60*60*24*28};
        return [true,res[0]]
      }else{
        return [false, "Invalid Credentials"]
      }
    } catch (error) {
      return [false, "error: " + error.message]
    }
  }
  return (
    <div>
      <Login ser={ser}/>
    </div>
  )
}

export default page
