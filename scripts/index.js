const detector = document.getElementById('scroll-detector');
const menu = document.getElementById('menu');
const observer = new IntersectionObserver(observing, {root: null, rootMargin: "0px", threshold: [1, 0.5]})
observer.observe(detector);

function observing(entries, obs){
    entries.forEach(element => {
        if(element.isIntersecting){
            if(element.isIntersecting){
                if(element.intersectionRatio != 1){
                    menu.classList.toggle("left-menu");
                }else{
                    menu.classList.remove("left-menu");
                }
                
            }
        }
    });
}

const links = document.querySelectorAll('header nav ul li a');
const sections = document.querySelectorAll('section');
let previousSelection = document.createElement('a');

const menuObserver = new IntersectionObserver(changeSelection, {root:null, rootMargin: "0px", threshold: 0.5});
sections.forEach((e) => {menuObserver.observe(e);});

function changeSelection(entries, observer){
    entries.forEach((entry)=>{
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5){
            let sectionid = entry.target.id;
            links.forEach(link => {
                console.log(link.getAttribute("href"))
                if(link.getAttribute("href").includes(sectionid)){
                    console.log(link.getAttribute("href"))
                    previousSelection.classList.toggle("selected");
                    link.classList.toggle("selected");
                    previousSelection = link;
                }
            });
        }
    })
}