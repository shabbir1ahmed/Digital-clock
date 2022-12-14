// const time = () => {
//   const h2 = document.createElement("h2");
//   h2.className = "watch";
//   const date = new Date();

//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const second = date.getSeconds();

//   const hours = hour > 12 ? hour - 12 : hour;
//   const minutes = minute < 10 ? "0" + minute : minute;
//   const seconds = second < 10 ? "0" + second : second;

//   const watch = `${hours} : ${minutes} : ${seconds}`;

//   const digitalWatch = document.createTextNode(watch);
//   h2.appendChild(digitalWatch);
//   const showDigitalWatch = document.body.appendChild(h2);
//   return showDigitalWatch;
// };
// console.log(time());

const time = () => {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const amPm = hour > 12 ? "pm" : "am";
  // const hours = hour > 12 ? `${hour - 12}` : hour;
  if (hour === 0) {
    hour = 12;
  } else if (hour < 10) {
    hour = "0" + hour;
  } else if (hour > 12) {
    hour = hour - 12;
  }
  const minutes = minute < 10 ? "0" + minute : minute;
  const seconds = second < 10 ? "0" + second : second;

  const watch = `${hour} : ${minutes} : ${seconds}`;
  document.getElementById("watch").innerHTML = watch;
  document.getElementById("time-formate").innerText = amPm;
};
console.log(time());
setInterval(time, 1000);
