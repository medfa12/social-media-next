import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { userAgent } from 'next/server';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export const UserCard = ({ id, name, age, image }: Props) => {
  return (
    <Link href={`/users/${id}`}>
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={image || undefined} alt={name || 'User'} />
          <AvatarFallback>{name ? name.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name || 'Anonymous'}</CardTitle>
          <CardDescription>{age ? `Age: ${age}` : 'Age not provided'}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
    </Link>
  );
};