function setClock(r){
    const seconds = document.querySelector(".seconds");
    const minutes = document.querySelector(".minutes");
    const hours = document.querySelector(".hours");

    const now = new Date();
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();
    console.log(h, m, s);

    var sd = (s + now.getMilliseconds() / 1000) / 60 * 360;
    var md = m / 60 * 360;
    var hd = (h + m / 60) / 12 * 360;

    seconds.style.transform = 'rotate(' + sd + 'deg)';
    minutes.style.transform = 'rotate(' + md + 'deg)';
    hours.style.transform = 'rotate(' + hd + 'deg)';
    
    let dir;
    r ? dir="rev" : dir="spin";
    
      seconds.classList.add(dir);
      minutes.classList.add(dir);
      hours.classList.add(dir);
      
    
}

const reverse = false;
document.addEventListener('DOMContentLoaded', function () {
    setClock(reverse);
});
