console.log('Loaded!');


$('.madi2').hover(function () {
  $(this).addClass('magictime vanishIn');
});
setTimeout(function(){
     $('.madi2').addClass('magictime puffIn');
 }, 2000);

var project= document.getElementById("project")

project.onclick = function () {
        location.href = "http://sanattaori.imad.hasura-app.io/counter";
    };



var button = document.getElementById('counter');

button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState ===XMLHttpRequest.DONE){
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://sanattaori.imad.hasura-app.io/counter',true);
    request.send(null);

};

//submit


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRequest();
      
    request.onreadystatechange = function() {
        if (request.readyState ===XMLHttpRequest.DONE){
            if(request.status === 200) {
               var names = request.responseText;
               names = JSON.parse(names);
    var list ='';
    for (var i=0; i<names.length; i++) {
        list+='<li>' + names[i] + '</li>'
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://sanattaori.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    
    
};


//loder

$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);
 
});
  
alsolike(
  "NNzGVd", "Search input context animation",
  "aOQddB", "Open & Close Animation",
  "wBOder", "Subtle Icons hover effect"
);



setTimeout(function(){
     $('.madi2').addClass('magictime puffIn');
 }, 5000);
