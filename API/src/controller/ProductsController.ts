import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Products } from '../entity/products';
import { validate } from 'class-validator';

export class ProductsController {
    static getAll = async (req: Request, res: Response) => {
        const productsRepository = getRepository(Products);
        let products;

        try {
            products = await productsRepository.find({ select: ['id', 'identification', 'name', 'category', 'price', 'inventory'] });
        } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
        }

        if (products.length > 0) {
            res.send(products);
        } else {
            res.status(404).json({ message: 'Not result' });
        }
    };

    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const productsRepository = getRepository(Products);
        try {
            const product = await productsRepository.findOneOrFail(id);
            res.send(product);
        } catch (e) {
            res.status(404).json({ message: 'Not result' });
        }
    };

    static new = async (req: Request, res: Response) => {
        const { identification, name, category, price, inventory } = req.body;
        const products = new Products();

        products.identification = identification;
        products.name = name;
        products.category = category;
        products.price = price;
        products.inventory = inventory;

        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(products, validationOpt);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        const citiesRepository = getRepository(Products);
        try {
            await citiesRepository.save(products);
        } catch (e) {
            return res.status(409).json({ message: 'Product already exist' });
        }

        // All ok
        res.send({ result: 'Product created' });
    };

    static edit = async (req: Request, res: Response) => {
        let product;
        const { id } = req.params;
        const { identification, name, category, price, inventory } = req.body;

        const productsRepository = getRepository(Products);
        // Try get user
        try {
            product = await productsRepository.findOneOrFail(id);
            product.identification = identification;
            product.name = name;
            product.category = category;
            product.price = price;
            product.inventory = inventory;
        } catch (e) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product, validationOpt);

        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        // Try to save user
        try {
            await productsRepository.save(product);
        } catch (e) {
            return res.status(409).json({ message: 'Username already in use' });
        }

        res.status(201).json({ message: 'product update' });
    };

    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(Products);
        let product: Products;

        try {
            product = await userRepository.findOneOrFail(id);
        } catch (e) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Remove user
        userRepository.delete(id);
        res.status(201).json({ message: ' User deleted' });
    };
}

export default ProductsController;
