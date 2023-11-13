let h = document.getElementById("hr");
let m = document.getElementById("min");
let s = document.getElementById("sec");
let ap = document.getElementById("ampm");


setInterval(()=>{
    hval = new Date().getHours();
    mval = new Date().getMinutes();
    sval = new Date().getSeconds(); 

    sval = sval < 10 ? "0"+ sval: sval;
    mval = mval < 10 ? "0" + mval: mval;
    hval = hval < 10 ? "0" + hval: hval;

    hval = hval > 12 ? hval-12 : hval;
    apval = hval >= 12 ? "PM" : "AM";

      h.innerText = hval;
      m.innerText = mval;
      s.innerText = sval;
      ap.innerText = apval;

},1000);