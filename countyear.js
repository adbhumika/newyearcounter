const dayEl=document.getElementById("day");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const newYearTime=new Date("jan 1,2026 00:00:00").getTime();
updatecoundown();
function updatecoundown(){
    const now=new Date().getTime();
   const gap=newYearTime-now;
   const seconds=1000;
   const minutes=seconds*60;
   const hours=minutes*60;
   const day=hours*12;
   const d=Math.floor(gap/day);
    const h=Math.floor((gap % day)/hours);
    const m=Math.floor((gap % hours)/minutes);
    const s=Math.floor((gap % minutes)/seconds);
    dayEl.innerText=d;
    hoursEl.innerText=h;
    minutesEl.innerText=m;
    secondsEl.innerText=s;
    setTimeout(updatecoundown,1000);
}