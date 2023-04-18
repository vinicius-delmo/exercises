import { Request, Response } from 'express';
import knex from 'knex';
import config from '../../knexfile';

const knexInstance = knex(config);

type Brand = {
  name: string;
  brand_id: number;
};

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const brands: Brand[] = await knexInstance('brands').select('*');
    res.status(200).send(brands);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const brand = await knexInstance('brands').select('*').where({ id });
    if (!brand.length) throw new Error('Essa marca não existe');

    res.status(200).json(brand);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;

    const id: number[] = await knexInstance('brands').insert({
      name,
    });

    res.status(201).json({ id: id[0], name });
  } catch (error: any) {
    res.send(error);
  }
};
const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const updatedData = { name };

    const product = await knexInstance('brands')
      .update(updatedData)
      .where({ id });
    if (!product) throw new Error('Essa marca não existe');

    res.status(201).json({ id: id[0], name });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product = await knexInstance('brands').delete().where({ id });

    if (!product) throw new Error('Essa marca não existe');

    res.status(200).json({ msg: 'Marca deletada' });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
