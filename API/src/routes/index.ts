import { Router } from 'express';
import Products from './products';

const routes = Router();

routes.use('/products', Products);

export default routes;
