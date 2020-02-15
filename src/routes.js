import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Session routes
routes.post('/sessions', SessionController.store);

// User routes
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// Recipient routes
routes.post('/recipients', authMiddleware, RecipientController.store);
routes.put('/recipients', authMiddleware, RecipientController.update);

export default routes;
