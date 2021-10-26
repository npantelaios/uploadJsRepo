
eval($.ajax({
    url: "https://raw.githubusercontent.com/npantelaios/uploadJsRepo/main/test2.js",
    dataType: "script",
    success: success
}));

var my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src','https://raw.githubusercontent.com/npantelaios/uploadJsRepo/main/test2.js');
document.head.appendChild(my_awesome_script);