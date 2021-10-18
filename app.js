const mysql = require("mysql2");
const express = require("express");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PONGAN LA CONTRASEÑA DE ROOT AQUI",
  database: "proyectotesis",
});

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get("/profesor", (req, res) => {
  console.log(req.body.profe);
  const profe = req.body.profe;
  // connection.query(
  //   `select * from profesor as p where p.nombre like '${profe}%'`,
  //   (err, result, fields) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(404).send("Error");
  //     } else {
  //       console.log(result);
  //       res.status(200).send(JSON.stringify(result));
  //     }
  //   }
  // );
  connection.query(
    `select * from profesor`,
    (err, result, fields) => {
      if (err) {
        console.log(err);
        res.status(404).send("Error");
      } else {
        console.log(result);
        res.status(200).send(JSON.stringify(result));
      }
    }
  );
});

app.get("/profesor/:profe", (req, res) => {
  console.log(req.params.profe);
  const profe = req.params.profe;
  connection.query(
    `select * from profesor as p where p.nombre like '${profe}%'`,
    (err, result, fields) => {
      if (err) {
        console.log(err);
        res.status(404).send("Error");
      } else {
        console.log(result);
        res.status(200).send(JSON.stringify(result));
      }
    }
  );
});


app.listen(3000, function () {
  console.log("runnin at 3000");
});

app.use(function (req, res) {
  res.status(404).send("Error");
});
