
import { cookies } from 'next/headers'



export default function Home() {

return (
  <div>
    {cookies().get('email').value}
  </div>
)
}