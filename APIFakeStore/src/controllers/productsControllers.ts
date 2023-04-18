import { Request, Response } from 'express';
import knex from 'knex';
import config from '../../knexfile';

const knexInstance = knex(config);

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category_id: number;
  image: string;
  rating: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const product: Product[] = await knexInstance('products')
      .select(
        'products.id',
        'products.title',
        'products.price',
        'products.description',
        'categories.name as category',
        'products.image',
        'products.rating'
      )
      .join('categories', 'categories.id', '=', 'products.category_id');
    res.status(200).send(product);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product: Product[] = await knexInstance('products')
      .select(
        'products.id',
        'products.title',
        'products.price',
        'products.description',
        'categories.name as category',
        'products.image',
        'products.rating'
      )
      .join('categories', 'categories.id', '=', 'products.category_id')
      .where({ 'products.id': id });
    if (!product.length) throw new Error('Esse produto não existe');
    res.status(200).json(product[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { title, price, description, category, image, rating } = req.body;

    const findCategory = await knexInstance('categories')
      .select('id')
      .where({ name: category });

    const categoryId = findCategory[0].id;

    const id: number[] = await knexInstance('products').insert({
      title,
      price,
      category_id: categoryId,
      description,
      image,
      rating,
    });
    res.status(201).send({
      id: id[0],
      title,
      price,
      category,
      description,
      image,
      rating,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, price, description, category, image, rating } = req.body;
    const findCategory = await knexInstance('categories')
      .select('id')
      .where({ name: category });

    const categoryId = findCategory[0].id;
    const updatedProduct = {
      title,
      price,
      category_id: categoryId,
      description,
      image,
      rating
    };

    const product = await knexInstance('products')
      .update(updatedProduct)
      .where({ id });

    res.status(200).json({
        id,
        title,
        price,
        category,
        description,
        image,
        rating
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id;
        const book = await knexInstance("products").delete().where({ id });
    
        if (!book) throw new Error("Esse produto não existe");
    
        res.status(200).json({ msg: "Produto deletado" });
      } catch (error: any) {
        res.send(error.message ? { error: error.message } : error);
      }
}

export default { index, show, insert, update, remove };
