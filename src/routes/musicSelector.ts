import { Router, Request, Response, NextFunction } from 'express';
import { MusicFinder } from '../controllers/musicController';
import { param, validationResult } from 'express-validator';

const router = Router();

const validateCity = [
    param('city')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('City must be a valid string containing only letters and spaces'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

router.get('/music/:city', validateCity, MusicFinder);

export default router;
