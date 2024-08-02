export function animateNavbar() {
    window.addEventListener("scroll", function(){
        const header = document.querySelector('.navbar-content')
        header.classList.toggle('rolagem',window.scrollY > 350)
    });
}
