async function loadData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"; // API URL
    const res = await fetch(url); // promise of response
    const data = await res.json(); // promise of JSON data
    console.log(data); // show data
}

const loadPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();
    showPosts(data);
};

const showPosts = (posts) => {
    console.log(posts);
    posts.forEach((post) => {
        console.log(post);
    });
};
