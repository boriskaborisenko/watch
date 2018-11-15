function setClock(){
    const seconds = document.querySelector(".seconds");
    const minutes = document.querySelector(".minutes");
    const hours = document.querySelector(".hours");

    const now = new Date();
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();
    console.log(h, m, s);

    const sd = (s + now.getMilliseconds() / 1000) / 60 * 360;
    const md = m / 60 * 360;
    const hd = (h + m / 60) / 12 * 360;

    seconds.style.transform = 'rotate(' + sd + 'deg)';
    minutes.style.transform = 'rotate(' + md + 'deg)';
    hours.style.transform = 'rotate(' + hd + 'deg)';
    
}


document.addEventListener('DOMContentLoaded', function () {
    setInterval(()=>{
        setClock();
    },1000);
});
