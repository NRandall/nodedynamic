//problem: need simple way to view th user badge count and javascript points from web browser
//solution: use node.js to get info and serve template with http for dynamic site

//1. create web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  homeRoute(req, res);
}).listen(port, hostname, () => {
  console.log(`Server running at http:${hostname}:${port}/`);
});

//2. handle http route GET / and POST / ie home
function homeRoute(req, res) {
	//if url == "/" && GET
		//show searcsh field
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.write("Header\n");
		res.write("Search\n");
		res.end("Footer\n");
	//if url == "/" && POST
		//redirect to /:username
}

//3. handle http rout GET /:username
	//if url == "/....."
		//get json from TH
			//on "end"
				//show profile
			//on "error"
				//show error

//4 Function that handles the reading of files and merge in value
	//read from file and get a string
		//merge values into string

