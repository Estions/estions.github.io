let topdiv = document.querySelector(".top-div");
let bottomdiv = document.querySelector(".bottom-div");

let main = document.getElementById("main");
let head = document.getElementById("head");

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.target == topdiv && entry.isIntersecting){
            updateScreens(true);
        }
        if(entry.target == bottomdiv && entry.isIntersecting){
            updateScreens(false);
        }
    })
},{
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});
  
function updateScreens(isScreen){
    if(isScreen == true) //When Scrolling to Landing Page
    {
        scrollTo(0,head.clientTop);
        head.classList.remove("minimized");
        main.classList.add("minimized");
        bottomdiv.classList.remove("minimized");
        topdiv.classList.add("minimized");
    }
    else //When scrolling to main
    {
        head.classList.add("minimized");
        main.classList.remove("minimized");
        bottomdiv.classList.add("minimized");
        topdiv.classList.remove("minimized");
    }

}

observer.observe(topdiv);
observer.observe(bottomdiv);

