/**
 * Rola suavemente para um elemento alvo na página, ajustando pelo offset da navbar fixa.
 * @param {string} targetId - O ID do elemento alvo (ex: 'about') ou '#' para rolar para o topo.
 * @param {number} extraOffset - Espaço adicional (em pixels) abaixo da navbar. Padrão 10.
 * @returns {boolean} - Retorna true se a rolagem foi iniciada, false se o elemento não foi encontrado.
 */

export const smoothScrollTo = (targetId, extraOffset = 1) => {

    if (['#', 'home', 'top'].includes(targetId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return true;
    }

    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
        console.warn(`[smoothScrollTo] Elemento com ID "${targetId}" não encontrado.`);
        return false;
    }

    // Obtém a altura da navbar (header), se existir
    const navbarElement = document.querySelector('header');
    const navbarHeight = navbarElement?.offsetHeight || 0;

    // Calcula a posição do elemento alvo em relação ao topo do documento
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

    // Calcula a posição final da rolagem, descontando a altura da navbar e o offset extra
    const offsetPosition = elementPosition - navbarHeight - extraOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    return true; // Indica que a rolagem foi iniciada
};