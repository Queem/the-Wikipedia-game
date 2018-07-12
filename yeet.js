function init (){
    newSet();
}
var xhr = new XMLHttpRequest();
function newSet () {
    var site1 = "https://en.wikipedia.org/w/api.php?action=query&list=random";
    var site2 = "https://en.wikipedia.org/wiki/Special:Random";

    xhr.open('GET', site2, false);
    xhr.send();
    xhr.onreadystatechange = processRequest;

    console.log(site1);
    //console.log(val1);
}

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response.ip);
    }
}

function report(e) {
    console.log(e.target);
}