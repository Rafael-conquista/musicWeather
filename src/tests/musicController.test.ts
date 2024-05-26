import { Request, Response } from 'express';
import { MusicFinder } from '../controllers/musicController';
import { weatherSearcher } from '../services/temperatureService';

jest.mock('../services/temperatureService');

describe('MusicFinder', () => {
  it('should return a playlist for pop music when temperature is greater than 25', async () => {
    const temperature = 29;

    (weatherSearcher as jest.Mock).mockResolvedValueOnce(temperature);

    const req: Partial<Request> = {
      params: {
        city: 'São Paulo'
      }
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await MusicFinder(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringMatching('pop') }));
  });

  it('should return a playlist for rock music when temperature is greater than 10 and lower than 25', async () => {
    const temperature = 20;

    (weatherSearcher as jest.Mock).mockResolvedValueOnce(temperature);

    const req: Partial<Request> = {
      params: {
        city: 'São Paulo'
      }
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await MusicFinder(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringMatching('rock') }));
  });

  it('should return a playlist for classical music when temperature is lower than 10', async () => {
    const temperature = 8;

    (weatherSearcher as jest.Mock).mockResolvedValueOnce(temperature);

    const req: Partial<Request> = {
      params: {
        city: 'São Paulo'
      }
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await MusicFinder(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringMatching('classical') }));
  });
});
