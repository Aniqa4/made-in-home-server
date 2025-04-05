import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productServices.createProductToDB(product);

    res.status(200).json({
      sucess: true,
      message: 'Product is added successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
};
