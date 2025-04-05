import { Schema, model, connect } from 'mongoose';
import { Product } from './products/product.interface';

const productSchema = new Schema<Product>({
  id: { type: String },
  productName: { type: String, required: true },
  Description: { type: String },
  price: { type: String, required: true },
  totalQty: { type: Number, required: true },
  availbleQty: { type: Number },
  soldQty: { type: Number },
  image_url: { type: String },
});

export const ProductModel = model<Product>('Product', productSchema);
