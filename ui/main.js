console.log('Loaded!');

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        var gname = profile.getName();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }


$('.madi2').hover(function () {
  $(this).addClass('magictime vanishIn');
});
setTimeout(function(){
     $('.madi2').addClass('magictime puffIn');
 }, 2000);




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

var gname =googleUser.getBasicProfile().getName();

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRequest();
      var gname =googleUser.getBasicProfile().getName();
    request.onreadystatechange = function() {
        if (request.readyState ===XMLHttpRequest.DONE){
            if(request.status === 200) {
               var names = request.responseText;
               names = JSON.parse(names);
    var list ='';
    for (var i=0; i<names.length; i++) {
        list+='<li>'+ gname  + '</br>' + names[i] + '</li>'
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
  



setTimeout(function(){
     $('.madi2').addClass('magictime puffIn');
 }, 5000);
