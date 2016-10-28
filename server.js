var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



function createTemplate (data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = `
<html>
<head>
	<title>Article one</title>
	<meta name ="viewport" content ="width=device-width,initial-scale=1">
    <script>
    .container {
    max-width : 900px;
    margin: 0 auto;
    color: grey;
font-family: sans-serif;
padding-left:20px ;
padding-right:20px;
}
</script>
	
</head>
<body>
<div class ="container">
    

<div>
	<a href="/">home</a>
</div>
<hr/>
<h3>
	${heading}
</h3>
<div>
	${date}
</div>
<div>
	${content}
</div>
</div>
</body>
</html>




`;
return htmlTemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res){
    counter = counter +1;
    res.send (counter.toString());
    
});


app.get('/ui/particle.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'particle.js'));
});

app.get('/ui/app.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.js'));
});


app.get('/article-one', function (req, res){
    res.send('Artical one requested');
    
});

app.get('/article-two', function (req, res){
  res.send(createTemplate(articleOne));
    
});

app.get('/article-three', function (req, res){
    res.send('Artical three requested');
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/typed.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'typed.js'));
});

app.get('/ui/magic.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'magic.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var names=[];
app.get('/submit-name/:name', function (req, res) {
  var name;
  names.push(name);
  
  res.send(names);
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
