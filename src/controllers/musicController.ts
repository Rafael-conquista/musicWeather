import { Request, Response } from 'express';
import { weatherSearcher } from '../services/temperatureService';
import { playlistSearcher } from '../services/musicService';

export const MusicFinder = async (req: Request, res: Response): Promise<void> => {
    try {
        const city: string = req.params.city;
        const temperature: number = await weatherSearcher(city);
        const genre: string = weatherMapper(temperature)
        const playlist:string = await playlistSearcher(genre)
        const message:string = `Olá! em ${city} está ${temperature}°, um ótimo clima para ouvir playlists de ${genre}, recomendo ouvir a playlist abaixo ⬇️`
        res.status(200).json({ message: message, playlist: playlist });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
};

function weatherMapper(temperature: number): string {
    if (temperature > 25) {
        return 'pop';
    } else if (temperature < 10) {
        return 'classical';
    }
    return 'rock';
}