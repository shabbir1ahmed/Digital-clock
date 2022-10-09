const h2 = document.createElement("h2");
console.log(h2);

const date = new Date();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const hours = hour > 12 ? hour - 12 : hour;
const minutes = minute < 10 ? "0" + minute : minute;
const seconds = second < 10 ? "0" + second : second;

const watch = `${hours} : ${minutes} : ${seconds}`;
console.log(watch);

const digitalWatch = document.createTextNode(watch);
h2.appendChild(digitalWatch);
console.log(h2);

document.body.appendChild(h2);

h2.className = "watch";
