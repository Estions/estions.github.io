let header = document.querySelector(".top");
let footer = document.querySelector(".bottom");

let body = document.getElementById("body");

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.target == header && entry.isIntersecting){ //When Scrolling to Landing Page
            body.classList.remove("show-main");
            console.log("top");
        }
        if(entry.target == footer && entry.isIntersecting){ //When scrolling to main
            body.classList.add("show-main");
            console.log("bottom");
        }
    })
},{
    root: null,
    rootMargin: '0px',
    threshold: 1
});

observer.observe(header);
observer.observe(footer);

