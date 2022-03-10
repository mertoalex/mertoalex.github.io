(function(d, s, id) {
var js, kjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s);
js.id = id;
js.src = 'https://kreosus.com/public/iframe/js/iframe-api.js';
kjs.parentNode.insertBefore(js, kjs);
console.log(1)
if($.browser.mozilla){// mozilla
document.getElementById('kreosus-iframe').style.MozBorderRadius = "25px";console.log("fire")}else{ 
document.getElementById('kreosus-iframe').style.borderRadius = "25px";console.log("chrum")} // w3c
}(document, 'script', 'kreosus-iframe-api'));
