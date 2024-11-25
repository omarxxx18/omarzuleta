// script.js

// Datos de ejemplo
const players = [
    { rank: 1, name: "Carlsen, Magnus", country: "NOR", rating: 2831, birthYear: 1990 },
    { rank: 2, name: "Hikaru, Nakamura", country: "USA", rating: 2802, birthYear: 1987 },
    { rank: 3, name: "Erigaisi, Arjun", country: "IND", rating: 2797, birthYear: 2003 },
    { rank: 4, name: "Caruana, Fabiano", country: "USA", rating: 2796, birthYear: 1992 },
    { rank: 5, name: "Gukesh D", country: "IND", rating: 2794, birthYear: 2006 },
    { rank: 6, name: "Abdusattorov, N", country: "UZB", rating: 2783, birthYear: 2004 },
    { rank: 7, name: "Firouzja, Alireza", country: "FRA", rating: 2767, birthYear: 2003 },
    { rank: 8, name: "Wei, Yi", country: "CHN", rating: 2763, birthYear: 1999 },
    { rank: 9, name: "Carlsen, Magnus", country: "NOR", rating: 2831, birthYear: 1990 },
    { rank: 10, name: "Hikaru, Nakamura", country: "USA", rating: 2802, birthYear: 1987 },
    { rank: 11, name: "Erigaisi, Arjun", country: "IND", rating: 2797, birthYear: 2003 },
    { rank: 12, name: "Caruana, Fabiano", country: "USA", rating: 2796, birthYear: 1992 },
    { rank: 13, name: "Gukesh D", country: "IND", rating: 2794, birthYear: 2006 },
    { rank: 14, name: "Abdusattorov, N", country: "UZB", rating: 2783, birthYear: 2004 },
    { rank: 15, name: "Firouzja, Alireza", country: "FRA", rating: 2767, birthYear: 2003 }
];

// Elementos del DOM
const scrollArea = document.getElementById('scrollArea');
const scrollbarThumb = document.getElementById('scrollbarThumb');
const rankingsBody = document.getElementById('rankings-body');

// Estado
let isDragging = false;

// Funciones principales
function populateTable() {
    players.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.name}</td>
            <td>
                 <img src="pais/${player.country.toLowerCase()}.png" alt="${player.country} flag" class="country-flag">
                ${player.country}
            </td>
            <td>${player.rating}</td>
            <td>${player.birthYear}</td>
        `;
        rankingsBody.appendChild(row);
    });
}

function updateThumbHeight() {
    const scrollRatio = scrollArea.clientHeight / scrollArea.scrollHeight;
    const thumbHeight = Math.max(scrollRatio * scrollArea.clientHeight, 30);
    scrollbarThumb.style.height = `${thumbHeight}px`;
}

function updateThumbPosition() {
    const scrollRatio = scrollArea.scrollTop / (scrollArea.scrollHeight - scrollArea.clientHeight);
    const maxTop = scrollArea.clientHeight - scrollbarThumb.offsetHeight;
    const thumbPosition = scrollRatio * maxTop;
    scrollbarThumb.style.top = `${thumbPosition}px`;
}

function onThumbDrag(e) {
    if (!isDragging) return;

    const scrollbarRect = scrollbarThumb.parentElement.getBoundingClientRect();
    const thumbRect = scrollbarThumb.getBoundingClientRect();
    
    let newTop = e.clientY - scrollbarRect.top - thumbRect.height / 2;
    newTop = Math.max(0, Math.min(newTop, scrollbarRect.height - thumbRect.height));
    
    const scrollRatio = newTop / (scrollbarRect.height - thumbRect.height);
    scrollArea.scrollTop = scrollRatio * (scrollArea.scrollHeight - scrollArea.clientHeight);
}

// Event Listeners
function initializeEventListeners() {
    scrollArea.addEventListener('scroll', updateThumbPosition);
    scrollbarThumb.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mousemove', onThumbDrag);
    document.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('resize', () => {
        updateThumbHeight();
        updateThumbPosition();
    });
}

// Inicialización
function init() {
    populateTable();
    updateThumbHeight();
    updateThumbPosition();
    initializeEventListeners();
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);