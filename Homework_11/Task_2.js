function fetchToDo() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function fetchUser() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}


Promise.all([fetchToDo(), fetchUser()])
    .then(([todo, user]) => {
        console.log("All results:");
        console.log("First object:", todo);
        console.log("Second object:", user);
    })
    .catch(error => console.log("Error:", error));


Promise.race([fetchToDo(), fetchUser()])
    .then(result => {
        console.log("Faster result:", result);
    })
    .catch(error => console.log("Error:", error));