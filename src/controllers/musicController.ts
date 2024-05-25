import { Request, Response } from 'express';
import { weatherSearcher } from '../services/temperatureService';

export const MusicFinder = async (req: Request, res: Response): Promise<void> => {
    try {
        const city: string = req.params.city;
        const temperature: number = await weatherSearcher(city);
        res.status(200).json({ message: temperature });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};