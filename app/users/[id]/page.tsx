import { prisma } from "@/lib/prisma";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import FollowButton from "@/components/follow/FollowButton";

interface Props {
    params: {
        id: string
    }
}
export async function generateMetadata ({ params}: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` }
    }

export default async function UserProfile({ params }: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    });

    const { name, bio, image } = user ?? {};
    const session = await getServerSession(authOptions);
    const Same = user?.email== session?.user?.email
    
    return (
        <div className="container mx-auto p-6">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader className="flex flex-col items-center space-y-4">
                    <Avatar className="w-24 h-24">
                        <AvatarImage src={image || undefined} alt={name || 'User'} />
                        <AvatarFallback>{name ? name.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-center">{name || 'Anonymous User'}</h2>
                </CardHeader>
                <CardContent>
                    {bio && (
                        <p className="text-center text-muted-foreground">{bio}</p>
                    )}
                </CardContent>
                {!Same && <FollowButton targetUserId={params.id} />}
            </Card>
            
        </div>
    );
}