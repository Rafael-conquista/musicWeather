import { weatherSearcher } from '../services/temperatureService';
import axios from 'axios';

jest.mock('axios');

describe('weatherSearcher', () => {
    it('should return the temperature of a city', async () => {
        const mockResponse = {
            data: {
                main: {
                    temp: 20
                }
            }
        };
        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        const temperature: number = await weatherSearcher('Sao Paulo');

        expect(temperature).toBe(20);
    });
});
