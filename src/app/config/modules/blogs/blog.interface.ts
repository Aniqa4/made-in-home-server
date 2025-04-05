export type Blog = {
  id: string;
  blogTitle: string;
  nameOfWriterID: number;
  nameOfWriter: string;
  description: string;
  ingredients: string[];
  categoryID: number;
  categoryName: string;
  likes: number;
  views: number;
  saved: number;
  image_url: string;
};
