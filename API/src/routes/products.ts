import { checkJwt } from './../middlewares/jwt';
import { ProductsController } from './../controller/ProductsController';
import { Router } from 'express';

const router = Router();

// Get all cities
router.get('/', ProductsController.getAll);

// Get one city
router.get('/:id', ProductsController.getById);

// Create a new city
router.post('/', ProductsController.new);

// Edit uscityer
router.put('/:id', ProductsController.edit);

// Delete
router.delete('/:id', ProductsController.delete);

export default router;
