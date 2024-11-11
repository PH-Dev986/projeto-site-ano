const postForm = document.getElementById('post-form');
const feed = document.getElementById('feed');

postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const textarea = postForm.querySelector('textarea');
    const postContent = textarea.value;

    // Criar um novo elemento para o post
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.textContent = postContent;

    // Adicionar o novo post ao feed
    feed.appendChild(newPost);

    // Limpar o textarea
    textarea.value = '';
});