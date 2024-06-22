import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";


export default async  function Dashboard(){
    const session = await getServerSession(authOptions);
    if(!signIn){
        redirect('/api/auth/signin')
    }
    const CurrentUserEmail =session?.user?.email!;
    const user = await prisma.user.findUnique({
        where:{
            email: CurrentUserEmail,
        }
    })
    return (
        <>
        <h1>Dashboard</h1>
        <ProfileForm user={user}/>
        </>
    )
}
