async function loadData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"; // API URL
    const res = await fetch(url); // promise of response
    const data = await res.json(); // promise of JSON data
    console.log(data); // show data
}

const loading = document.getElementById("loading");

const loadPosts = async () => {
    loading.removeAttribute("style");
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();
    showPosts(data);
};

const showPosts = (posts) => {
    const postsContainer = document.getElementById("posts");
    // console.log(posts);
    posts.forEach((post) => {
        const { userId, id, title, body } = post || {};
        const postDiv = document.createElement("div");
        postDiv.style = "";
        postDiv.innerHTML = `
        <hr>
        <h3>${id}. ${title} (by ${userId})</h3>
        <p>${body}</p>
        `;
        postsContainer.appendChild(postDiv);
        loading.setAttribute("style", "display: none;");
    });
};
