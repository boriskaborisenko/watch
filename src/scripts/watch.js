function updateClock(){
    const seconds = document.querySelector(".seconds");
    const minutes = document.querySelector(".minutes");
    const hours = document.querySelector(".hours");

    const now = new Date();
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();
    const sd = (s + now.getMilliseconds() / 1000) / 60 * 360;
    const md = m / 60 * 360;
    const hd = (h + m / 60) / 12 * 360;

    seconds.style.transform = 'rotate(' + sd + 'deg)';
    minutes.style.transform = 'rotate(' + md + 'deg)';
    hours.style.transform = 'rotate(' + hd + 'deg)';
    requestAnimationFrame(updateClock)
    
}

window.requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (f) {
        return setTimeout(f, 1000 / 60)
    }


document.addEventListener('DOMContentLoaded', function () {
    updateClock();
});
