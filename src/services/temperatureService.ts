import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export const weatherSearcher = async (city: string): Promise<number> => {
    try {
        const openWeatherMapUrlBase: string | undefined = process.env.WEATHER_API_URL || '';
        const url: string = openWeatherMapUrlBase.replace('__CITY__', encodeURI(city));
        const response = await axios.get(url);
        return response.data.main.temp;
    } catch (e: any) {
        throw new Error("error while trying to search the weather");
    }
};