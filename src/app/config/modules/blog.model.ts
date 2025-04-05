import { Schema, model, connect } from 'mongoose';
import { Blog } from './blogs/blog.interface';

const blogSchema = new Schema<Blog>({
  id: {
    type: Number,
  },
  blogTitle: {
    type: String,
    required: true,
  },
  nameOfWriter: {
    type: String,
    required: true,
  },
  nameOfWriterID: {
    type: Number,
    required: true,
  },
  categoryID: {
    type: Number,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    default: [],
    required: true,
  },
  likes: { type: Number },
  views: { type: Number },
  saved: { type: Number },
  image_url: {
    type: String,
  },
});

export const BlogModel = model<Blog>('blog', blogSchema);
