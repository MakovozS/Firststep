
import axios from "axios";
import { jest } from '@jest/globals';

jest.mock('axios');
export const api = axios;

describe("API tests JSONPlaceholder", () => {
  test("GET /posts - all posts", async () => {

    axios.get.mockResolvedValue({
      status: 200,
      data: [{ id: 1, title: "Test Post" }],
    });


    const response = await axios.get("/posts");


    expect(response.status).toBe(200);
    expect(response.data[0]).toHaveProperty("title", "Test Post");
  });

  test("GET /posts/1 - post with id = 1", async () => {

    axios.get.mockResolvedValue({
      status: 200,
      data: { id: 1, title: "Test Post", body: "Test body" },
    });

    const response = await axios.get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title", "Test Post");
  });

  test("POST /posts - create new post", async () => {
    const newPost = {
      title: "New Post",
      body: "Content",
      userId: 1,
    };

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

  test("GET /users - all users", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: [{ id: 1, name: "John Doe" }],
    });

    const response = await axios.get("/users");

    expect(response.status).toBe(200);
    expect(response.data[0]).toHaveProperty("name", "John Doe");
  });

  test("POST /comments - create new comment", async () => {
    const newComment = {
      name: "New comment",
      body: "Content",
      postId: 1,
    };

    axios.post.mockResolvedValue({
      status: 201,
      data: { id: 1, ...newComment },
    });

    const response = await axios.post("/comments", newComment);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("name", newComment.name);
    expect(response.data).toHaveProperty("body", newComment.body);
    expect(response.data).toHaveProperty("postId", newComment.postId);
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

  test("Mock failed POST request", async () => {
    axios.post.mockRejectedValue({
      response: { status: 400, data: "Bad Request" },
    });

    const newPost = { title: "New Post", body: "Content", userId: 1 };

    try {
      await axios.post("/posts", newPost);
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toBe("Bad Request");
    }
  });
});
