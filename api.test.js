import axios from "axios";


const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});


api.interceptors.request.use(request => {
  console.log("requestс:", request.method.toUpperCase(), request.url);
  return request;
});


api.interceptors.response.use(response => {
  console.log("response:", response.status, response.config.url);
  return response;
});

describe("API tests JSONPlaceholder", () => {

  test("GET /posts - all posts", async () => {
    const response = await api.get("/posts");


    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty("userId");
    expect(response.data[0].title.length).toBeGreaterThan(10);
  });

  test("GET /posts/1 - postс id = 1 ", async () => {
    const response = await api.get("/posts/1");


    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("userId");
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
    expect(typeof response.data.title).toBe("string");
    expect(response.data.body).toContain("voluptatibus");
    expect(response.data.body.length).toBeGreaterThan(50);


    expect(response.data.body).toContain("ERROR");
  });

  test("POST /posts - new post", async () => {
    const newPost = {
      title: "Test post",
      body: "Content",
      userId: 1,
    };

    const response = await api.post("/posts", newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("title", newPost.title);
    expect(response.data).toHaveProperty("body", newPost.body);
    expect(response.data).toHaveProperty("userId", newPost.userId);
    expect(response.data.id).toBeGreaterThan(0);
    expect(response.data.title).not.toBe("");
    expect(response.data.body.length).toBeGreaterThan(5);
  });

  test("GET /users - all users", async () => {
    const response = await api.get("/users");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(5);
    expect(response.data[0]).toHaveProperty("name");
    expect(response.data[0].name.length).toBeGreaterThan(3);
  });

  test("POST /comments - new comments", async () => {
    const newComment = {
      name: "new comment",
      body: "content 2",
      postId: 1,
    };

    const response = await api.post("/comments", newComment);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("name", newComment.name);
    expect(response.data).toHaveProperty("body", newComment.body);
    expect(response.data).toHaveProperty("postId", newComment.postId);
    expect(response.data.name.length).toBeGreaterThan(5);
    expect(response.data.body).toContain("content");
  });
});
