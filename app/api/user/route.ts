import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/auth-options";
import { prisma } from "@/lib/prisma";

export async  function PUT(req:Request) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;
    const data = await req.json();
    data.age=Number(data.age)
    const user = await prisma.user.update({
        where:{
            email: currentUserEmail,
        },
        data
    })

}