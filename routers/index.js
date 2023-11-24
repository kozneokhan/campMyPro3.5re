import { Router } from 'express';
import { authRouter } from './auth.router.js';
import { userRouter } from './users.router.js';
import { productsRouter } from './products.router.js';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/products', productsRouter);

export { apiRouter };
