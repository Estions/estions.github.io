let header = document.querySelector(".top");
let footer = document.querySelector(".bottom");

let body = document.getElementById("body");

const observer = new IntersectionObserver(function(entries, observer){
       entries.forEach(entry => {
            if(entry.target == header && entry.isIntersecting){ //When Scrolling to Landing Page
                body.classList.remove("show-main");
            }
            if(entry.target == footer && entry.isIntersecting){ //When scrolling to main
                changeScreenMain();
            }
        })
    }
,{
    root: null,
    rootMargin: '0px',
    threshold: 1
});

function changeScreenMain(){
    setTimeout(function(){scrollTo(0,header.scrollHeight)},750);
    body.classList.add("show-main");
}

observer.observe(header);
observer.observe(footer);

