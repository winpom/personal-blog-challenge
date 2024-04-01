// Retrieve blog posts from local storage and display them
let blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
let blogPostsContainer = document.getElementById('blogPosts');

// Loop through each blog post and display it
for (let key in blogPosts) {
    if (blogPosts.hasOwnProperty(key)) {
        let post = blogPosts[key];
        let postElement = document.createElement('article');
        postElement.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.content}</p>
            <h5><i>Username: ${post.username}</i></h5>
        `;
        blogPostsContainer.prepend(postElement);
    }
}