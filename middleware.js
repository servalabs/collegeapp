import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
export function middleware(req) {
if(!cookies().has("email")){
    

    return NextResponse.redirect(new URL('/register',req.url))
}else{
    return NextResponse.redirect(new URL('/nearby',req.url))
}
}
export const config = {
  matcher: '/',
}