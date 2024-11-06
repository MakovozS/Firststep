class Request { 
    async fetchToDo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Error: " , error); 
        }
    }

    async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Error: " , error); 
        }
    }
}

class Result {
    constructor(request) {
        this.request = request;
    }

    async fetchAllResults() {
        try {
            const [todo, user] = await Promise.all([this.request.fetchToDo(), this.request.fetchUser()]); // Исправлено на this.request
            console.log("All results:");
            console.log("First object:", todo);
            console.log("Second object:", user);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    async fetchFasterResult() {
        try {
            const result = await Promise.race([this.request.fetchToDo(), this.request.fetchUser()]); // Исправлено на this.request
            console.log("Faster result:", result);
        } catch (error) {
            console.log("Error:", error);
        }
    }
}


const request = new Request(); 
const result = new Result(request); 

result.fetchAllResults();
result.fetchFasterResult();
