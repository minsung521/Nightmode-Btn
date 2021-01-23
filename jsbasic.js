const toggler = document.querySelector(".toggle-switch");
const DayOrNight = document.getElementById("jsChange");
const bodyDom = document.querySelector("body");

toggler.onclick = function () {
	toggler.classList.toggle("active");
	bodyDom.classList.toggle("night-mode");
};
// toggler.onclick = function () {
// 	toggler.classList.toggle("active");
// };
