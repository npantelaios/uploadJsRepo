// var target_url = "https://ebay.com"
// var xhr = new XMLHttpRequest();
// xhr.open('GET', target_url, true);
// xhr.send();
// var code = xhr.responseText;
// var dScript = document.createElement('script');

// try {
// dScript.appendChild( document.createTextNode(code) );
// document.body.appendChild(dScript);
// } catch(e) {
// dScript.text = code;
// document.getElementsByTagName('head')[0].appendChild(dScript);
// }


jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
}


$.loadScript('https://ebay.com', function() {
    console.log('ebay loaded')
});