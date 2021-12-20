function loadExternalJS(TARGET_URL){
    var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    xhr.open('GET', TARGET_URL, false);
    xhr.send(null);
    var code = xhr.responseText;
    var dScript = document.createElement('script');
    try {
    dScript.appendChild( document.createTextNode(code) );
    document.body.appendChild(dScript);
    } catch(e) {
    dScript.text = code;
    document.getElementsByTagName('head')[0].appendChild(dScript);
    }
    xhr = null;
}

loadExternalJS("https://raw.githubusercontent.com/npantelaios/uploadJsRepo/main/test2.js");

// eval($.ajax({
//     url: "https://raw.githubusercontent.com/npantelaios/uploadJsRepo/main/test2.js",
//     dataType: "script",
//     success: success
// }));

// var my_awesome_script = document.createElement('script');
// my_awesome_script.setAttribute('src','https://raw.githubusercontent.com/npantelaios/uploadJsRepo/main/test2.js');
// document.head.appendChild(my_awesome_script);