import axios from 'axios';
import { jest } from '@jest/globals';

jest.mock('axios');

describe("Mocking Axios requests", () => {
    test("Mock successful GET request", async () => {
        axios.get.mockResolvedValue({
            status: 200,
            data: [{ id: 1, title: "Test Post" }],
        });

        const response = await axios.get("/posts");

        expect(response.status).toBe(200);
        expect(response.data[0]).toHaveProperty("title", "Test Post");
    });

    test("Mock failed GET request", async () => {
        axios.get.mockRejectedValue({
            response: { status: 404, data: "Not Found" },
        });

        try {
            await axios.get("/wrong-url");
        } catch (error) {
            expect(error.response.status).toBe(404);
            expect(error.response.data).toBe("Not Found");
        }
    });

    test("Mock successful POST request", async () => {
        const newPost = { title: "New Post", body: "Content", userId: 1 };

        axios.post.mockResolvedValue({
            status: 201,
            data: { id: 1, ...newPost },
        });

        const response = await axios.post("/posts", newPost);

        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty("title", newPost.title);
        expect(response.data).toHaveProperty("body", newPost.body);
        expect(response.data).toHaveProperty("userId", newPost.userId);
    });

    test("Mock failed POST request", async () => {
        const newPost = { title: "New Post", body: "Content", userId: 1 };

        axios.post.mockRejectedValue({
            response: { status: 400, data: "Bad Request" },
        });

        try {
            await axios.post("/posts", newPost);
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data).toBe("Bad Request");
        }
    });
});
