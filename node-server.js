import http from "http";
const port = 3000;
const hostname = "127.0.0.1";
const server = http.createServer((req, res) => {
  if(req.url==='/')
  {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("hello ice tea");
  }
  else if(req.url==='/hello')
  {
    res.statusCode = 201;
    res.setHeader("Content-type", "text/plain");
    res.end("This is the case 2 ");
  }
  else
  {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/plain");
    res.end("404 wala error hai");
  }
});
server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});
