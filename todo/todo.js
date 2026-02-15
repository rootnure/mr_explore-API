const loadTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    showTodo(todos);
};

const showTodo = (todos) => {
    console.log(todos);
    const todosContainer = document.getElementById("todo-container");
    todosContainer.innerHTML = "";
    // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
    todos.forEach((todo) => {
        const { userId, id, title, completed } = todo;
        const todoCard = document.createElement("div");
        todoCard.classList = "todo";
        todoCard.style.backgroundColor = completed ? "lightgreen" : "orange";
        todoCard.innerHTML = `
        <p>${completed ? '<i class="fa-solid fa-square-check"></i>' : '<i class="fa-regular fa-square-check"></i>'}</p>
        <h3>${title}</h3>
        `;
        todosContainer.appendChild(todoCard);
    });
};
