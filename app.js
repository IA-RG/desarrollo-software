const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const env= require("./functions/envvar");
const tesisFunctions = require("./functions/tesis");
const consultas = require("./functions/consultas2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: env.password(),
  database: "proyectotesis",
});

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: env.password(),
  database: "proyectotesis",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
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
  connection.query(`select * from profesor`, (err, result, fields) => {
    if (err) {
      console.log(err);
      res.status(404).send("Error");
    } else {
      console.log(result);
      res.status(200).send(JSON.stringify(result));
    }
  });
});

app.get("/profesor/:profe", (req, res) => {
  console.log(req.params.profe);
  const profe = req.params.profe;
  connection.query(
    `select * from profesor as p where p.nombre like '%${pofe}%'`,
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

app.get("/busqueda/:busqueda", async (req, res) => {
  const formData = JSON.parse(req.params.busqueda);
  console.log(formData);
  const consulta = consultas.obtenerConsulta(
    formData.autores,
    formData.carrera,
    formData.directores,
    formData.grado,
    formData.palabrasClave,
    formData.resumen,
    formData.sinodales,
    formData.titulo,
    formData.year,
    formData.consulta
  );
  // console.log(consulta);
  tesisFunctions.obtenerTesis(consulta,promisePool,res).then((tesisResultantes)=>{
    console.log(tesisResultantes);
    res.status(200).send(JSON.stringify({tesis:tesisResultantes}));
  });
  // console.log(tesisResultantes);
  
});

app.post("/tesis", (req, res)=>{
  console.log("DENTRO");
  console.log(req.body);
  res.status(200).send(JSON.stringify("OK"));
});

app.listen(3000, function () {
  console.log("runnin at 3000");
});

app.use(function (req, res) {
  res.status(404).send("Error");
});
