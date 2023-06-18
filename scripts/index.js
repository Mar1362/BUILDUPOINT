const detector = document.getElementById('scroll-detector');
const menu = document.getElementById('menu');
const observer = new IntersectionObserver(observing, {root: null, rootMargin: "0px", threshold: [1, 0.5]})
observer.observe(detector);

function observing(entries, obs){
    entries.forEach(element => {
        if(element.isIntersecting){
            console.log(element.intersectionRatio);
            if(element.isIntersecting){
                // alert('hello')
                if(element.intersectionRatio != 1){
                    menu.classList.toggle("left-menu");
                }else{
                    menu.classList.remove("left-menu");
                }
                
            }else{
                // alert('bye bye')
                // menu.classList.toggle("left-menu");
            }
        }
    });
}

const links = document.querySelectorAll('header nav ul li a');
let lastLink = links[0];
lastLink.classList.toggle('selected');

links.forEach((value) => {
    lastLink = ((document.URL.toUpperCase().includes(value.textContent.toUpperCase()))) ? value : lastLink;
    value.onclick = function(){value.classList.toggle('selected'); lastLink.classList.remove('selected'); lastLink = value;}
})