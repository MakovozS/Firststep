import { api } from '../api.test';

describe('Error handling tests', () => {
    test('GET /wrong-url - error', async () => {
        api.get.mockRejectedValue({
            response: { status: 404, data: "Not Found" },
        });

        try {
            await api.get('/wrong-url');
        } catch (error) {
            expect(error.response).toBeDefined();
            expect(error.response.status).toBe(404);
            expect(error.response.data).toBe("Not Found");
        }
    });
});
