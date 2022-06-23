var load = document.addEventListener('DOMContentLoaded', function() {
    setTimeout(stage1,1000);
}, false);

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if(code == 'Space') 
    {
        toggleCuteNames();
    }
}, false);

const gift_t = document.getElementById("gift-top") ;
const gift_b = document.getElementById("gift-bot");
var cuteNames = true;

function stage1()
{
    var elements = Array.from(document.getElementsByClassName("hidden"));
    elements.forEach(item => {
        item.classList.remove("hidden");
    });
    setTimeout(stage2,2000);
}

function toggleCuteNames()
{
    cuteNames = !cuteNames;
    if(!cuteNames) document.getElementById("feet").innerHTML = "От Эрички &#x1F5A4;"; //🖤
    else document.getElementById("feet").innerHTML = "От Эрички &#x1F9E1;"; //🧡	

    console.log(cuteNames);
}

function stage2()
{
    gift_t.classList.add("gift-top");
    gift_b.classList.add("gift-bot");
    gift_t.onclick = stage3;
}



function stage3()
{
    gift_t.classList.remove("gift-top");
    gift_b.classList.remove("gift-bot");
    gift_t.classList.add("gift-prep");
    gift_b.classList.add("gift-prep");
    setTimeout(stage4,3000)
}

function stage4()
{
    gift_t.classList.remove("gift-prep");
    gift_b.classList.remove("gift-prep");
    gift_t.classList.add("gift-boom");
    gift_b.classList.add("gift-boom");
    setTimeout(stage5,2000)
}

function stage5()
{
    window.location.href = 'gift.html'+'?cuteNames='+cuteNames;
}