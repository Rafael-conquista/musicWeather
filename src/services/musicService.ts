import axios from 'axios';
import * as qs from 'querystring';
import dotenv from 'dotenv';

dotenv.config();

export const playlistSearcher = async (genre: string): Promise<string> => {
    try {
        const playlist: string = await get_playlist(genre)
        if (playlist !== 'token_error') {
            return playlist;
        }
    } catch (e: any) {
        console.log(e.message)
        throw new Error(e.message);
    }
    throw new Error('Failed to get a valid token after 5 attempts');
};

async function get_playlist(genre: string): Promise<string> {
    let spotify_token = '';

    for (let attempt = 1; attempt <= 5; attempt++) {
        try {
            if (spotify_token === '') {
                spotify_token = await get_spotify_token();
            }

            const playlist_response = await axios.get(`https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=1`, {
                headers: {
                    'Authorization': `Bearer ${spotify_token}`
                }
            });

            if (playlist_response.status === 200) {
                const playlistUrl = playlist_response.data.playlists.items[0].external_urls.spotify;
                return playlistUrl;
            }
        } catch (error: any) {
            if (error.response?.status === 401) {
                console.log('Token inválido ou expirado. Atualizando token...');
                spotify_token = await get_spotify_token();
            }
        }
    }

    return 'token_error';
}


async function get_spotify_token(): Promise<string> {
    const CLIENT_ID: string | undefined = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET: string | undefined = process.env.SPOTIFY_CLIENT_SECRECT;
    const AUTH_URL: string = 'https://accounts.spotify.com/api/token';
    const credentials: string = `${CLIENT_ID}:${CLIENT_SECRET}`;
    const base64Credentials: string = Buffer.from(credentials).toString('base64');

    const requestData = {
        grant_type: 'client_credentials'
    };

    const config = {
        headers: {
            'Authorization': `Basic ${base64Credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const response = await axios.post(AUTH_URL, qs.stringify(requestData), config);
    return response.data.access_token;
}
