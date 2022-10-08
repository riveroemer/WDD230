const navBtn = document.querySelector("#nav-btn");
const navEl = document.querySelector("nav");
const dateEl = document.querySelector("#header-date");
const footerEl = document.querySelector("#footer-year")
const modEl = document.querySelector(".last-modification")

navBtn.addEventListener("click", function(){
    navEl.classList.toggle("open")
    navBtn.classList.toggle("open")
});

const curDate = new Date()
const curDay = function(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[curDate.getDay()]}
const curDayofMonth = curDate.getDate()
const curMonth = function(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"]
    return months[curDate.getMonth()]}
const curYear = curDate.getFullYear()

dateEl.innerHTML = `${curDay()}, ${curDayofMonth} ${curMonth()} ${curYear}`;

footerEl.innerHTML = `&copy${curYear} Merida`

const d = new Date();
const last_updated = document.querySelector(".last_updated");
const current_year = document.querySelector(".current_year");
last_updated.textContent = document.lastModified;
current_year.textContent = d.getFullYear();
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	d);
