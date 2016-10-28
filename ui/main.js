console.log('Loaded!');
setTimeout(function(){
     $('.madi2').addClass('magictime puffIn');
 }, 5000);

setInterval(function(){ 
    $('.sanat2').toggleClass('magictime puffIn');
}, 3000 );

setInterval(function(){ 
    $('.I2').toggleClass('magictime puffIn');
}, 3000 );

setInterval(function(){ 
    $('.text2').toggleClass('magictime puffIn');
}, 3000 );

setInterval(function(){ 
    $('.cursor2').toggleClass('magictime puffIn');
}, 3000 );

//counter
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState ===XMLHttpRequest.done){
            if(request.status === 200) {
                var counter = request.responseText;
            }
        }
    };
    request.open('GET ','http://http://sanattaori.imad.hasura-app.io/counter',true);
    request.send(null);

};