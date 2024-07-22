
import NearBy from '@/components/pages/NearBy'
import User from '@/models/Users'
import DBconn from '@/db/dbconn'
import { cookies } from "next/headers";
const page =  () => {
  const cookieStore = cookies()
  const email = cookieStore.get('email').value
  const cords = cookieStore.get('location').value.split(',').map(e => parseFloat(e))
  // console.log(email.split(',').map(e => parseFloat(e)))
  async function ser(d) {
    "use server"
    try {
      await DBconn()
      const users = await User.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: cords
            },
            $maxDistance: d* 1000 // distance in meters
          }
        }
      });
      
      return users.map(user =>{return {
        name: user.name,
        email: user.email,
        phone: user.phone,
        coordinates: user.location.coordinates // distance in kilometers
      }})
      // users.then(users =>console.log(users))
      console.log(await users)
      // }
    } catch (e) { console.log(e) }
  }
  async function upd(cords){
    "use server"
    // return [true,cords]
    try {
      await DBconn()
      if (cords[0]==''||cords[1]==''){
        return [false, "Invalid Coordinates"]
      }
      const user = await User.findOne({email: email})
      user.location.coordinates = cords
      const n = await user.save()
      return [true]
    } catch (error) {
      return [false,error.message]
    }
    // await user.save()
  }
  return (
    <div>
      <NearBy ser={ser} email={email} upd={upd}/>
    </div>
  )
}

export default page
