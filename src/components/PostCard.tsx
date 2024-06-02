import { Metadata } from "@/lib/types";
import Link from "next/link";

const PostCard = (prop: Metadata) => {
   return (
      <Link href={`/posts/${prop.slug}`} className="group">
         <div className="border border-border rounded-md p-3 flex group-hover:border-primary">
            <div
               className="icon-container"
               dangerouslySetInnerHTML={{ __html: prop.icon ?? "" }}
            />
            <div>
               <h3 className="font-sans text-lg font-bold group-hover:text-primaryText">
                  {prop.title}
               </h3>
               <div className="mx-2 mb-2">
                  <ul className="flex justify-start mt-px mb-1">
                     {prop.tags.map((tag) => (
                        <li
                           key={tag}
                           className="mx-2 first:ml-0 first:pl-0 font-mono px-1 py-px text-xs font-light text-primary"
                        >
                           {tag}
                        </li>
                     ))}
                  </ul>
                  <p className="font-sans text-md font-medium">
                     {prop.description}
                  </p>
                  <p className="font-mono text-xs font-light text-secondaryText mt-2">
                     {prop.reviewDate.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                     })}
                  </p>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default PostCard;
