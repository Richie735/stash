import PostCard from "@/components/PostCard";
import getPostMetadata from "@/lib/getPostMetadata";

export default function Home() {
   const postMetadata = getPostMetadata("src/lib/posts");
   return (
      <main>
         <h1>Posts</h1>
         <ul className="p-2">
            {postMetadata.map((post) => (
               <PostCard {...post} key={post.slug} />
            ))}
         </ul>
      </main>
   );
}
