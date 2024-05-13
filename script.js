document.addEventListener("DOMContentLoaded", function() {
    // Mostrar la pestaña de "Campaña" por defecto al cargar la página
    document.getElementById("tab1").classList.add("active");
});

function openTab(event, tabId) {
    // Ocultar todos los contenidos de las pestañas
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    
    // Mostrar el contenido de la pestaña seleccionada
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");
}

window.addEventListener('scroll', function() {
    var leftColumn = document.getElementById('leftColumn');
    var scrollPosition = window.scrollY;

    // Ajustar la posición de la columna izquierda
    if (scrollPosition >= 1195) { // 50px es la distancia desde la parte superior
        leftColumn.style.position = 'fixed';
        leftColumn.style.top = '0';
    } else {
        leftColumn.style.position = 'absolute';
        leftColumn.style.top = '0'; // 50px es la distancia desde la parte superior
    }
});

window.addEventListener('scroll', function() {
    var leftColumn = document.getElementById('leftColumn2');
    var scrollPosition = window.scrollY;

    // Ajustar la posición de la columna izquierda
    if (scrollPosition >= 900) { // 50px es la distancia desde la parte superior
        leftColumn.style.position = 'fixed';
        leftColumn.style.top = '0';
    } else {
        leftColumn.style.position = 'absolute';
        leftColumn.style.top = '0'; // 50px es la distancia desde la parte superior
    }
});


