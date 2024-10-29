document.addEventListener('DOMContentLoaded', function() {
    // Função para rolar suavemente para um elemento específico
    function scrollToSection(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = event.currentTarget.getAttribute('href'); // Obtém o href do link clicado
        const targetElement = document.querySelector(targetId); // Seleciona o elemento de destino

        // Rolagem suave
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Adiciona o evento de clique aos links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});