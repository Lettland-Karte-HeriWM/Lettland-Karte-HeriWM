function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("open");
}

function closeMenu(){
    if(window.innerWidth <= 768){
        document.getElementById("sidebar").classList.remove("open");
    }
}