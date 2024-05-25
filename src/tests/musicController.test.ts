import request from 'supertest';
import app from '../app';

describe('Music Controller', () => {
  it('should return a list of music', async () => {
    const response = await request(app).get('/api/music');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('music');
  });
});