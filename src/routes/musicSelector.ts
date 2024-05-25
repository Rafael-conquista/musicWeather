import { Router } from 'express';
import { getMusic } from '../controllers/musicController';

const router = Router();

router.get('/music', getMusic);

export default router;