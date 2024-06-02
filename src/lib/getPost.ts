import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "./types";

export default function getPost(basePath: string, slug: string): Metadata {
   const files = fs.readdirSync(basePath);
   const post = files.filter((file) => file.endsWith(`${slug}.md`));

   if (!post) {
      console.error(`File not found: ${slug}.md`);
      return {
         tags: ["Error"],
         title: `${slug} was not found`,
         description: "Error",
         icon: "",
         reviewDate: new Date(),
         slug: slug,
         content: "",
      } as Metadata;
   }

   const file = fs.readFileSync(`${basePath}/${slug}.md`, "utf8");
   const matterResult = matter(file);
   return {
      tags: matterResult.data.tags,
      title: matterResult.data.title,
      description: matterResult.data.description,
      icon: matterResult.data.icon,
      reviewDate: matterResult.data.reviewDate,
      slug: slug,
      content: matterResult.content,
   } as Metadata;

   // const posts = markdownPosts.map((filename) => {
   //    const fileContent = fs.readFileSync(`${basePath}/${filename}`, "utf8");
   //    const matterResult = matter(fileContent);
   //    return {
   //       tags: matterResult.data.tags,
   //       title: matterResult.data.title,
   //       description: matterResult.data.description,
   //       icon: matterResult.data.icon,
   //       reviewDate: matterResult.data.reviewDate,
   //       slug: filename.replace(".md", ""),
   //    } as Metadata;
   // });

   // const filename = `${slug}.md`;
   // const filePath = `${basePath}/${filename}`;

   // const files = fs.readdirSync(basePath);
   // console.log(files);
   // const post = files.find((file) => file === filename);
   // console.log(post);

   // // Check if the file exists
   // if (!post) {
   //    console.error(`File not found: ${filePath}`);
   //    return {
   //       tags: ["Error"],
   //       title: `${slug} was not found`,
   //       description: "Error",
   //       icon: "",
   //       reviewDate: new Date(),
   //       slug: slug,
   //       content: "",
   //    } as Metadata;
   // }

   // const fileContent = fs.readFileSync(filePath, "utf8");
   // const matterResult = matter(fileContent);

   // return {
   //    tags: matterResult.data.tags,
   //    title: matterResult.data.title,
   //    description: matterResult.data.description,
   //    icon: matterResult.data.icon,
   //    reviewDate: matterResult.data.reviewDate,
   //    slug: slug,
   //    content: matterResult.content,
   // } as Metadata;
}
