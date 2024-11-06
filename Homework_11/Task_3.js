async function fetchToDo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
        const data = await response.json(); 
        return data; 
    } catch (error) {
        throw new Error("Error: ",  error); 
    }
}

async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); 
        const data = await response.json();
        return data; 
    } catch (error) {
        throw new Error("Error: " , error); 
    }
}


async function fetchAllResults() {
    try {
        const [todo, user] = await Promise.all([fetchToDo(), fetchUser()]); 
        console.log("All results:"); 
        console.log("First object:", todo); 
        console.log("Second object:", user); 
    } catch (error) {
        console.log("Error:", error);
    }
}

async function fetchFasterResult() {
    try {
        const result = await Promise.race([fetchToDo(), fetchUser()]); 
        console.log("Faster result:", result); 
    } catch (error) {
        console.log("Error:", error); 
    }
}


fetchAllResults(); 
fetchFasterResult(); 