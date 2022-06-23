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
else {
    Array.from(document.getElementById("wrongDay").children).forEach(item => {
        item.remove();
    });
}
