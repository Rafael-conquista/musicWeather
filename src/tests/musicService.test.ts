import { playlistSearcher } from '../services/musicService';

const get_playlist = jest.fn();

describe('playlistSearcher function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return a playlist URL when successful', async () => {
        const genre = 'rock';
        const playlistUrl = 'https://open.spotify.com/playlist/37i9dQZF1DXcmaoFmN75bi';

        get_playlist.mockResolvedValueOnce(playlistUrl);

        const result = await playlistSearcher(genre);

        expect(result).toBe(playlistUrl);
    });
});
