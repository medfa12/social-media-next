"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
export function SignOutButton(){
    return <Button onClick={()=>signOut()}>Sign Out</Button>
}
export function SignInButton(){
    const {data:session,status}=useSession();
    if(status=="loading"){
        return <>...</>;
    }
    if (status === 'authenticated') {
        return(
        <Link href={'/dashboard' }>
        <Image
        src={session.user?.image ?? '/unknown.webp'}
        width={32}
        height={32}
        alt="Your Name"
        />
        </Link>
        )
    }
    return <Button onClick={()=>signIn()}>Sign in</Button>
}        
