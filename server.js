import http from "http";
import fs from "fs";
import path from "path";

const port = 3000;
const server = http.createServer((req, res) => {
  const filepath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filepath);
  const extpath = String(path.extname(filepath)).toLowerCase;
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".png": "text/png",
    ".js": "text/javascript",
  };
  const contentType = mimeTypes[extpath] || "application/octet-stream";

  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File Not Found BRooooo");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
server.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
