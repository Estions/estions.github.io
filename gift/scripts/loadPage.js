document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadFunction,1000);
}, false);


function loadFunction()
{
    var elements = Array.from(document.getElementsByClassName("hidden"));
    elements.forEach(item => {
        item.classList.remove("hidden");
    });
    setTimeout(playAnimationLoad,2000);
}

function playAnimationLoad()
{
    document.getElementById("gift-top").classList.add("gift-top");
    document.getElementById("gift-bot").classList.add("gift-bot");
    enablePresent();
}

function enablePresent()
{
    document.getElementById("gift-top").onclick = openNext;
}


function openNext()
{
    alert("heheexde");
}