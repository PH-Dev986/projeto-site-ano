document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação e as seções
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.game-section');

    // Função para esconder todas as seções
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Adiciona evento de clique a cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Esconde todas as seções
            hideAllSections();

            // Pega o ID da seção correspondente ao link clicado
            const game = link.getAttribute('data-game');
            const section = document.getElementById(game);

            // Exibe a seção correspondente
            section.classList.add('active');
        });
    });
});
