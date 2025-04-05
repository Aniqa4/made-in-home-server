import { ProductModel } from '../blog.model';
import { Product } from './blog.interface';

const createBlogToDB = async (blog: Product) => {
  const result = await ProductModel.create(blog);
  return result;
};

export const blogServices = {
  createBlogToDB,
};
