import { Request, Response } from 'express';
// import { getTemperature } from '../services/temperatureService';
// import { getMusicByTemperature } from '../services/musicService';

export const getMusic = async (req: Request, res: Response) => {
  try {

    return res.status(200).json({ message: 'hello world!' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};