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
    // get and empty container
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";
    // loop through posts array
    posts.forEach((post) => {
        const { userId, id, title, body } = post || {};
        // add and design each posts
        const postDiv = document.createElement("div");
        postDiv.style = "";
        postDiv.classList.add("post");
        postDiv.innerHTML = `
        <h3 style="text-transform: uppercase;">${id}. ${title} (by ${userId})</h3>
        <p>${body}</p>
        `;
        // append each post to container
        postsContainer.appendChild(postDiv);
        loading.setAttribute("style", "display: none;");
    });
};
