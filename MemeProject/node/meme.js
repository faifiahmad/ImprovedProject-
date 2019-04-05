

var fs = require('fs');
var express = require('express')
var bodyParser = require('body-parser');
var app = express();
const prefix="http://199.192.27.9:3000/"
app.use(bodyParser.json({limit: '50mb', extended: true})); // support json encoded bodies
app.use(bodyParser.urlencoded({limit: '50mb', extended: true })); // suppo
	app.post('/', function(req, res) {
		//console.log(req.body);
		var name=Math.ceil(Math.random()*1000000000000).toString()+'.png';
        var base64Data = req.body.moka.replace(/^data:image\/png;base64,/, "");
		//console.log(base64Data);
        fs.writeFile("content/"+name, base64Data, 'base64', function(err) {
            if(err){
               console.log(err);
             }
	});
	res.send(prefix+name)
	
	})
app.use(express.static('content'))		
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))