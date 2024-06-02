import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "./types";

export default function getPost(basePath: string, slug: string): Metadata {
   const filename = `${slug}.md`;
   const filePath = `${basePath}/${filename}`;

   // Check if the file exists
   if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return {
         tags: ["Error"],
         title: `${slug} was not found`,
         description: "Error",
         icon: "",
         reviewDate: new Date(),
         slug: slug,
         content: "Error",
      } as Metadata;
   }

   const fileContent = fs.readFileSync(filePath, "utf8");
   const matterResult = matter(fileContent);

   return {
      tags: matterResult.data.tags,
      title: matterResult.data.title,
      description: matterResult.data.description,
      icon: matterResult.data.icon,
      reviewDate: matterResult.data.reviewDate,
      slug: slug,
      content: matterResult.content,
   } as Metadata;
}
