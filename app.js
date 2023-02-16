const hour = document.getElementById('hour');
const dots = document.getElementById('dots');
const minute=document.getElementById('minute');

const gun = document.getElementById('day');
const month = document.getElementById('month');
const year=document.getElementById('year');

const date = new Date();
const saat = date.getHours();
const dk = date.getMinutes();
console.log(saat,dk);


const day =date.getDate();
const ay = date.getMonth() + 1;
const yıl =date.getFullYear()
console.log(day,ay,yıl);


setInterval(function(){
    const date = new Date();
const saat = date.getHours();
const dk = date.getMinutes();
console.log(saat,dk);


const day =date.getDate();
const ay = date.getMonth()+1;
const yıl =date.getFullYear();

hour.innerHTML=saat;
minute.innerHTML=dk;

gun.innerHTML=day
month.innerHTML=ay
year.innerHTML=yıl


},1000);

