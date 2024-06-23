document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    const topics = [
        { name: 'Estadísticas', url: 'estadisticas.html' },
        { name: 'Videos', url: 'videos.html' },
        { name: 'Información', url: 'informacion.html' },
        { name: 'Efecto invernadero', url: 'tema1.html' },
        { name: 'Cambio Climatico', url: 'tema2.html' },
        { name: 'Impacto en la Biodiversidad', url: 'tema3.html' },
        { name: 'desertificacion', url: 'tema4.html' },
        { name: 'Agotamiento de Recursos Naturales', url: 'tema5.html' },
        { name: 'Acidificación de los Océanos', url: 'tema6.html' },
        { name: 'Salud Pública y Calentamiento Global', url: 'tema7.html' },
        { name: 'Energías Renovables', url: 'tema8.html' },
        { name: 'Deforestación', url: 'tema9.html' },
        { name: 'Efectos en la agricultura', url: 'tema10.html' },
        { name: 'Adaptación al cambio climático', url: 'tema11.html' },
        { name: 'Mitigación de emisiones', url: 'tema12.html' },
        { name: 'Educación ambiental', url: 'tema13.html' },
        { name: 'Impacto en los océanos', url: 'tema14.html' },
        { name: 'Política medioambiental', url: 'tema15.html' },
        { name: 'Consecuencias socioeconómicas', url: 'tema16.html' },
        { name: 'Transporte y emisiones', url: 'tema17.html' },
        { name: 'Acción climática internacional', url: 'tema18.html' },
        { name: 'Resiliencia climática', url: 'tema19.html' },
        { name: 'Conservación de ecosistemas', url: 'tema20.html' }
    ];

    function updateSearchResults() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        if (query) {
            const filteredTopics = topics.filter(topic => topic.name.toLowerCase().includes(query));
            if (filteredTopics.length > 0) {
                filteredTopics.forEach(topic => {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = topic.name;
                    resultItem.classList.add('search-result-item');
                    resultItem.addEventListener('click', () => {
                        window.location.href = topic.url;
                    });
                    searchResults.appendChild(resultItem);
                });
            } else {
                const resultItem = document.createElement('div');
                resultItem.textContent = 'No se encontraron resultados';
                searchResults.appendChild(resultItem);
            }
        }
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const topic = topics.find(topic => topic.name.toLowerCase() === query);
        if (topic) {
            window.location.href = topic.url;
        } else {
            window.location.href = 'error.html';
        }
    });

    searchInput.addEventListener('input', updateSearchResults);
});
