import { Router } from 'express';
import { authRouter } from './auth.router.js';
import { userRouter } from './users.router.js';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);

export { apiRouter };
