import { UserCard } from "@/components/UserCard/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users(){
    const users = await prisma.user.findMany();
    return (
        <>
        {users.map((user)=>(<UserCard key={user.id} {...user}/>))}
        </>
    )

}

