export type Metadata = {
   tags: string[];
   title: string;
   description: string;
   icon?: string;
   reviewDate: Date;
   slug: string;
   content?: JSX.Element;
};
