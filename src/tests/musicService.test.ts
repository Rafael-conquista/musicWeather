import { playlistSearcher } from '../services/musicService';

const get_playlist = jest.fn();

describe('playlistSearcher function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return a playlist URL when successful', async () => {
        const genre = 'rock';
        const playlistUrl = 'https://open.spotify.com/playlist/';

        get_playlist.mockResolvedValueOnce(playlistUrl);

        const result = await playlistSearcher(genre);
        const regex = /https:\/\/open.spotify\.com\/playlist/;

        expect(result).toMatch(regex);
    });
});
