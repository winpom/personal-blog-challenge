function submitBlogPost() {
    const username = document.getElementById('usernameInput').value;
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;

    const titleWithoutSpaces = title.replace(/\s+/g, '-');

    const uniquePostName = `blogPost-${titleWithoutSpaces}`;

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const newBlogPost = {
        username: username,
        title: title,
        content: content,
    };

    blogPosts[uniquePostName] = newBlogPost;

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Blog post submitted successfully!';
}
