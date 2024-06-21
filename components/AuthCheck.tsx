'use Client';
import { useSession } from "next-auth/react";
import React from "react";
export default function AuthCheck({children}:{children :React.ReactNode}){
    const {data:session,status}=useSession();
    console.log(session,status)
    if(!session){
        return null;
    }
    return children;
}

