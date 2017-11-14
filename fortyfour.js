const express = require('express');
const path = require('path');
const app = express();
const route = express.Router();

//==========================================
//middleware
//path.resolve--resolves a sequence of paths into an absolute path
//express.static--serves static files
route.use(express.static(path.resolve(__dirname, './demo')))

//==========================================
//routes
// path must be absolute or specify root to res.sendFile
route.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get("/hello", (req, res) => {
  const ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

  const soft = req.headers["user-agent"];
  console.log(req.headers['x-forwarded-proto']);
  res.json({done: true});
});

app.get("/err", (req, res, next) => {
  const err = new Error("Oops");
  err.status = 500;
  next(err);
});

app.use(route);

//==============================================
//catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({error: err.message});
});

//=============================================
//start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
