function toggleMenu() {
    var x = document.querySelector('.navigation ul');
    var menuIcon = document.querySelector('.container');
    
    // Toggle navigation visibility
    if (x.classList.contains('show-nav')) {
        x.classList.remove('show-nav');
    } else {
        x.classList.add('show-nav');
    }

    // Toggle hamburger icon animation
    menuIcon.classList.toggle('change');
}