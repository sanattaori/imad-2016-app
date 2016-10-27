console.log('Loaded!');
setTimeout(function(){
     $('.madi2').addClass('magictime puffIn');
 }, 5000);



var counter = 0;
var button = document.getElementById('counter');
button.onclick = function() {

	counter = counter + 1;
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();
};

   var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
      });

      // Toggle button
      document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });  