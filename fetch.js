// then chaining way
fetch("https://jsonplaceholder.typicode.com/todos/1") // calling fetch() to get response
    .then((response) => response.json()) // resolving fetch promise by converting response to json
    .then((data) => console.log(data)); // show data

// asynchronous way (async...await)
const callingFetch = async () => {
    // calling fetch() to get response
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json(); // resolving fetch promise by converting response to json
    console.log(data); // show data
};
callingFetch();
