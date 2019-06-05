var container = document.querySelector('#particles');
var body = document.querySelector('body');
var button = document.querySelector('button');


container.addEventListener('click', function (e) {
    var randomSize = Math.random(25)*20 + 5;
    var particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.height = randomSize + 'px';
    particle.style.width = randomSize + 'px';
    particle.style.backgroundColor = getRandomColor();
    container.appendChild(particle);

});
for(i = 10; i < 100; i++){
    container.click();
}
button.addEventListener('click', function (e) {
    var centerX = e.target.offsetLeft + e.target.offsetWidth / 2;
    var centerY = e.target.offsetTop + e.target.offsetHeight / 2;
    var root = document.documentElement;
    root.style.setProperty('--centerX', centerX + "px");
    root.style.setProperty('--centerY', centerY + "px");

    document.querySelectorAll('.particle').forEach(function (particle) {
        // particle.style.animation = 'none';
        // particle.style.left = particle.offsetLeft + 'px';
        // particle.style.left = particle.offsetTop + 'px';
        if (particle.classList.contains('goToDaddy')) {
            particle.classList.remove("goToDaddy");
        } else {
            particle.classList.add("goToDaddy");
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}