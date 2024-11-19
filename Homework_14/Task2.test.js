import { api } from '../api.test';
import axios from 'axios';

jest.mock('axios');

describe("Custom headers and params tests", () => {
    test("GET /posts with custom headers and params", async () => {

        axios.get.mockResolvedValue({
            status: 200,
            data: [{ id: 1, title: "Test Post" }],
        });

        const response = await api.get("/posts", {
            headers: {
                "Custom-Header": "my-custom-header",
            },
            params: {
                userId: 1,
            },
        });

        expect(response.status).toBe(200);
        expect(response.data[0]).toHaveProperty("title", "Test Post");
    });
});

