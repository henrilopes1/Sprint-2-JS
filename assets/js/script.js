document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});


