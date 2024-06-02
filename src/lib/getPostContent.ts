import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "./types";

export default function getPostContent(
   basePath: string,
   slug: string
): Metadata {
   const files = fs.readdirSync(basePath);
   const filename = `${slug}.md`;
   const post = files.filter((file) => file.endsWith(filename));

   if (!post) {
      return {
         tags: [],
         title: "Post not found",
         description: "Post not found",
         icon: "",
         reviewDate: new Date(),
         slug: "",
         content: "",
      } as Metadata;
   }

   console.log(`Metadata Extracted: ${basePath}/${filename}`);
   const fileContent = fs.readFileSync(`${basePath}/${filename}`, "utf8");
   const matterResult = matter(fileContent);
   return {
      tags: matterResult.data.tags,
      title: matterResult.data.title,
      description: matterResult.data.description,
      icon: matterResult.data.icon,
      reviewDate: matterResult.data.reviewDate,
      // slug: slug,
      // content: matterResult.content,
   } as Metadata;
}
