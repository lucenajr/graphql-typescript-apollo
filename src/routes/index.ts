import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ msg: 'Hello Lucena' }));

export default routes;
