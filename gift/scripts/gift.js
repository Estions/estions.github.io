

var i = 0;
var j = 0;
var txt = ['Привет, {0}.',';','Надеюсь твой вечер проходит хорошо.','Надеюсь что уже решила что будешь завтра одевать, какой макияж будешь делать.',';','Я не силен в поздравлениях, поэтому просто... С днем рождения тебя! Тяжело что-то определенное пожелать, поэтому...',';','Желаю тебе счастья, здоровья, успехов в поступлении, чтобы наконец полюбила свое тело.','Так же чтобы твои друзья всегда были рядом, чтобы жизнь не строила из себя доминатрицу и не наказывала тебя. ','Надеюсь что старые раны заживут и сможешь дальше радоваться простому повседневу без всяких вредных привычек^, ты мне очень важна и лично неприятно смотреть как ты портишь свое психологическое здоровье в борьбе со своими проблемами.',';','И да, пускай мой подарок тебе довольно банальный и скучный, Алена и Лиза подарят что-то лучше, это гарантированно, но я надеюсь что это тебе согреет душу. И очень надеюсь что хорошо отпразднуешь!',';','^С любовью, от Эрика. 🖤']; /* The text */
var lessCuteName = 'Марго';
var cuteName = ['Моя Булочка','Солнышко','Маргоша','Котик'];
var speed = 50; /* The speed/duration of the effect in milliseconds */
var outputField;
var outputFieldChild
var lastChild;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("cuteNames"));

document.addEventListener('DOMContentLoaded', createVars, false);

function createVars() {
    txt[0] = txt[0].replace('{0}',randomCuteName());
    outputField = document.getElementById("inputField");
    outputFieldChild = outputField.appendChild(document.createElement("p"));
    outputFieldChild.id = "OFC-0";
    setTimeout(write,3000);
}

function randomCuteName() {
    if(urlParams.get("cuteNames") == "true") return cuteName[Math.floor(Math.random() * cuteName.length)];
    else return lessCuteName;
}

function write() {
    
    if(i < txt.length)
    {
        if(j < txt[i].length)
        {
            if(';' == txt[i][j])
            {
                outputFieldChild = outputField.appendChild(document.createElement("p"));
                outputFieldChild.id = "OFC-" + (i+1);
                lastChild = "OFC-" + (i+1);
            }
            else if(urlParams.get("cuteNames") == "false" && '^' == txt[i][j])
            {
                outputFieldChild.innerHTML += '.';
                j=-1;
                i++;
            }
            else if(urlParams.get("cuteNames") == "true" && '^' == txt[i][j]){}
            else if('.' == txt[i][j] || '?' == txt[i][j] || '!' == txt[i][j])
            {
                outputFieldChild.innerHTML += txt[i][j];
                speed = 300;
            }
            else if(',' == txt[i][j])
            {
                outputFieldChild.innerHTML += txt[i][j];
                speed = 150;
            }
            else
            {
                outputFieldChild.innerHTML += txt[i][j];
                speed = 50;
            }
            j++;
        }
        else
        {
            j=0;
            i++;
        }
        setTimeout(write,speed);
        return;
    }
}
