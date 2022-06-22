date = new Date();
y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();
if(m < 10) {
    m = "0"+m;
}
if(d < 10) {
    d = "0"+d;
}
if(d < 24) {
    document.getElementById("rightDay").hidden = true;
    document.getElementById("wrongDay").hidden = false;
}
document.getElementById("date_text").innerHTML = y + " " + m + " " + d ;
