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

$(function(){
        $(".element").typed({
            strings: ["First sentence.", "Second sentence."],
            typeSpeed: 0
        });
    });

    