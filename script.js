document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tab1").classList.add("active");
});

function openTab(event, tabId) {
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");
}

window.addEventListener('scroll', function() {
    var leftColumn = document.getElementById('leftColumn');
    var triggerElement = document.getElementById('centerColumn');
    var triggerPosition = triggerElement.getBoundingClientRect().top;

    if (triggerPosition <= 0) { 
        leftColumn.style.position = 'fixed';
        leftColumn.style.top = '0';
    } else {
        leftColumn.style.position = 'absolute';
        leftColumn.style.top = '0';
    }
});

window.addEventListener('scroll', function() {
    var leftColumn = document.getElementById('leftColumn2');
    var triggerElement = document.getElementById('centerColumn2');
    var triggerPosition = triggerElement.getBoundingClientRect().top;

    if (triggerPosition <= 0) { 
        leftColumn.style.position = 'fixed';
        leftColumn.style.top = '0';
    } else {
        leftColumn.style.position = 'absolute';
        leftColumn.style.top = '0';
    }
});

window.addEventListener('scroll', function(){
    var barritas = document.getElementById('barritas');
    var scrollPosition = window.scrollY;
    var hvideo = document.getElementById('video').style.height;

    if (scrollPosition >= 650 + hvideo){
        barritas.style.display = 'contents';
        barritas.style.position = 'fixed';
        barritas.style.top = '0';
    }
});