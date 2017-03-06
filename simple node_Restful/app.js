var http= require('http');
var x;
function display() {
    var req=http.get("http://localhost:8001/person/getone",function(response) {

        var body = "";
        response.on("data",function (chunk) {
            body += chunk;
            console.log(body);
			x=body.toString()
            
        });

        })};
		
		
display();	
			http.createServer(function(req, res) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write('<!DOCTYPE html> <html> <head>  <meta charset="ISO-8859-1"> <title>Insert title here</title> </head> <body>'+x+'</body> </html>');
			res.end();
			}).listen(8888, '127.0.0.1');
			


