const http = require("http");

const html = require("./mymod");
const url = require("url");
var html1 = "<input name='firstname' type='text'></input><br><input name='secondname' type='text'></input>"


const server = http.createServer(
    (req, res) => {
        res.writeHead(200, { "conten-type": "text/html" });
        res.write("Hello this is h1 from mymode");
        res.write("<h2>THis is H2</h2>");
        res.write(html1);
        res.write("<button type='submit'>Submit</button>");
        res.end("Thank you");
        console.log(req.url);
        const urlob = url.parse(req.url, true);
        console.log(urlob);
        console.log(urlob.query.firstname);
        console.log(urlob.query.secondname);
    }
)

server.listen(5066);