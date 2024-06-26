import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "./types";

export default function getPostMetadata(basePath: string): Metadata[] {
   const files = fs.readdirSync(basePath);
   const markdownPosts = files.filter((file) => file.endsWith(".md"));

   const posts = markdownPosts.map((filename) => {
      console.log(`Metadata Extracted: ${basePath}/${filename}`);
      const fileContent = fs.readFileSync(`${basePath}/${filename}`, "utf8");
      const matterResult = matter(fileContent);
      return {
         tags: matterResult.data.tags,
         title: matterResult.data.title,
         description: matterResult.data.description,
         icon: matterResult.data.icon,
         reviewDate: matterResult.data.reviewDate,
         slug: filename.replace(".md", ""),
      } as Metadata;
   });

   return posts;
}
