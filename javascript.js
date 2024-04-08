const navHumberger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

navHumberger.addEventListener("click", (e)=>{
    navLinks.classList.toggle("nav--expanded");
    bar1.classList.toggle('bar1--active');
    bar2.classList.toggle('bar2--active');
    bar3.classList.toggle('bar3--active');
})


const tabs = document.querySelectorAll(".nav__tab");
const tabContent = document.querySelectorAll(".tab-content");

tabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);
        
        tabs.forEach((tab)=>tab.classList.remove("active"));
        tabContent.forEach((tabContent)=> tabContent.classList.remove("active"));

        tab.classList.add("active");
        targetTabContent.classList.add("active");
    })
})