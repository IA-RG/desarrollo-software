const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const env = require("./functions/envvar");
const tesisFunctions = require("./functions/tesis");
const consultas = require("./functions/consultas2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: env.password(),
  database: "proyectotesis",
  charset : 'utf8mb4_spanish_ci'
});

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: env.password(),
  database: "proyectotesis",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset : 'utf8mb4_spanish_ci',
});

const promisePool = pool.promise();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

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
  tesisFunctions
    .obtenerTesis(consulta, promisePool, res)
    .then((tesisResultantes) => {
      console.log(tesisResultantes);
      tesisResultantes.length>0?res.status(200).send(JSON.stringify({ tesis: tesisResultantes })):res.status(404).send();
    })
    .catch((err) => {
      console.log(err);
      res
        .status(503).send();
    });
  // console.log(tesisResultantes);
});

app.post("/tesis", (req, res) => {
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
