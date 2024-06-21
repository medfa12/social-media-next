import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from "@/lib/utils";
  
interface Post {
    title: string;
    slug: string;
    content: string;
  }
  
interface Props{
    params:{slug:string};
}
export default async function BlogPostPage({params}:Props){
const posts : Post []=await fetch('http://localhost:3000/api/content',{cache:"no-cache"}).then(
    (res)=>res.json()
    );
const post:Post=posts.find(post=>post.slug===params.slug)!
return(
    <Card className={cn("w-[45vw] mx-auto")}>
  <CardHeader>
    <CardTitle>{post.title}</CardTitle>
    <CardDescription>{post.slug}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{post.content}</p>
  </CardContent>
  <CardFooter>
    <p></p>
  </CardFooter>
</Card>


)
}