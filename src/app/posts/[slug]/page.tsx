import getPost from "@/lib/getPost";
import { Metadata } from "@/lib/types";
import Markdown from "markdown-to-jsx";

const page = async (props: { params: Metadata }) => {
   const slug = props.params?.slug;
   // const post = getPostContent(slug);
   const post = getPost("src/lib/posts", slug);
   console.log(slug);
   return (
      <main>
         <article>
            <div
               className="icon-container border-none"
               dangerouslySetInnerHTML={{
                  __html:
                     post?.icon ??
                     '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.7851 1.38057L5.56484 5.25075L7.68844 6.87108L10 5.10733V2C10 1.76607 9.91968 1.5509 9.7851 1.38057Z"></path><path d="M10 9.89268L2.58433 4.23442C2.37657 4.0759 2.08597 4.08889 1.89301 4.26532L1.17719 4.91984C1.08223 5.00667 1.02543 5.11898 1.00681 5.23629C0.979153 5.41056 1.03574 5.59585 1.17661 5.72504L9.7851 13.6194C9.91968 13.4491 10 13.2339 10 13V9.89268Z"></path><path d="M10.7532 1.0368C10.9105 1.32251 11 1.65081 11 2V13C11 13.3492 10.9105 13.6775 10.7532 13.9632C10.7906 13.9515 10.8274 13.9369 10.8634 13.9195L13.5399 12.625C13.8211 12.4889 14 12.2028 14 11.8889V3.11109C14 2.79721 13.8212 2.5111 13.5399 2.37507L10.8634 1.08048C10.8274 1.06306 10.7906 1.04852 10.7532 1.0368Z"></path><path d="M1.17661 9.27496L2.37233 8.17842L4.00854 9.6789L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496Z"></path></svg>',
               }}
            />
            <h1 className="text-4xl font-bold text-primaryText text-center mb-2">
               {post.title}
            </h1>
            <ul className="flex justify-center mt-px mb-1">
               {post.tags.map((tag: string) => (
                  <li
                     key={tag}
                     className="mx-2 list-none first:ml-0 first:pl-0 font-mono px-1 py-px text-xs font-light text-primary"
                  >
                     {tag}
                  </li>
               ))}
            </ul>
            <p className="text-center font-xs mb-8">
               {post.reviewDate.toLocaleDateString("en-GB", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
               })}
            </p>
            {post.content ? (
               <Markdown>{post.content}</Markdown>
            ) : (
               "Error: Post not found"
            )}
         </article>
      </main>
   );
};

export default page;
