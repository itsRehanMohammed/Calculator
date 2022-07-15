// let calScreen = document.getElementById("calScreen");
// let button = document.getElementsByTagName("button");
// let calScreenValue = "";
// for (const btn of button) {
//   btn.addEventListener("click", (e) => {
//     calScreenValue = e.target.innerText;
//     calScreen.value = calScreenValue;
//     console.log(calScreen.value);
//     if (calScreen.value == "x") {
//       calScreenValue += "*";
//       calScreen.value = calScreenValue;
//     } else if (calScreen.value == "C") {
//       calScreenValue = "";
//       calScreen.value = calScreenValue;
//     } else if (calScreen.value == "=") {
//       calScreen.value = eval(calScreenValue);
//     } else {
//       calScreenValue += e.target.innerText;
//       calScreen.value = calScreenValue;
//     }
//   });
// }
let calScreen = document.getElementById("calScreen");
let button = document.getElementsByTagName("button");
let calScreenValue = "";

for (let btn of button) {
  btn.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    if (btnText == "x") {
      btnText = "*";
      calScreenValue += btnText;
      calScreen.value = calScreenValue;
    } else if (btnText == "C") {
      btnText = "";
      calScreenValue = btnText;
      calScreen.value = calScreenValue;
    } else if (btnText == "backspace") {
      calScreenValue = calScreen.value.slice(0, -1);
      calScreen.value = calScreenValue;
    } else if (btnText == "=") {
      calScreen.value = eval(calScreenValue);
    } else {
      calScreenValue += btnText;
      calScreen.value = calScreenValue;
    }
  });
}
