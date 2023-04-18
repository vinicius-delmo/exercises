import { Request, Response } from 'express';
import knex from 'knex';
import config from '../../knexfile';

const knexInstance = knex(config);

type Car = {
  name: string;
  brand_id: number;
};

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars: Car[] = await knexInstance('cars')
      .select('cars.name', 'brands.name as brand')
      .join('brands', 'brands.id', '=', 'cars.brand_id');
    res.status(200).send(cars);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product: Car[] = await knexInstance('cars')
      .select('cars.name', 'brands.name as brand')
      .join('brands', 'brands.id', '=', 'cars.brand_id')
      .where({ 'cars.id': id });
    if (!product.length) throw new Error('Esse carro não existe');
    res.status(200).json(product[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, brand } = req.body;

    const findBrand = await knexInstance('brands')
      .select('id')
      .where({ name: brand });

    const brandId: number = findBrand[0].id;

    const id: number[] = await knexInstance('cars').insert({
      name,
      brand_id: brandId,
    });
    res.status(201).send({
      id: id[0],
      name,
      brand,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const { name, brand }: { name: string; brand: string } = req.body;

    const findBrand = await knexInstance('brands')
      .select('id')
      .where({ name: brand });

    const brandId = findBrand[0].id;
    const updateCar = {
      name,
      brand_id: brandId,
    };

    const car = await knexInstance('cars')
      .update(updateCar)
      .where({ id });
    if (!car) throw new Error("Esse carro não existe");
    res.status(201).send({
      id, 
      name,
      brand
    });


  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response):Promise<void> =>{
  try {
      const id: number= parseInt(req.params.id);
      const car: number = await knexInstance("cars").delete().where({ id });
      if (!car) throw new Error("Esse carro não existe");
  
      res.status(200).json({ msg: "Carro deletado" });
    } catch (error: any) {
      res.send(error.message ? { error: error.message } : error);
    }
}

export default { index, show, insert, update, remove };
