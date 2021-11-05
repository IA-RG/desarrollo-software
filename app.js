const mysql = require("mysql2");
const express = require("express");
const consultas = require("./functions/consultas2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "proyectotesis",
});

const app = express();

app.use(express.urlencoded({ extended: false }));

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
    `select * from profesor as p where p.nombre like '%${consulta}%'`,
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

app.get("/busqueda/:busqueda", (req, res) => {
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
  console.log(consulta);

  connection.query({sql:consulta, rowsAsArray: true},  (err, result, fields) => {
    if (err) {
      console.log(err);
      res.status(404).send("Error");
    } else {
      console.log(result);
      // console.log(fields);
      const tesis = [];
      // if(result typeof )
      result.forEach((row) => {
        const id = row.id;
        const obtenerAutores = `select a.fk_tesis as id,concat(a.nombre,' ',a.apellidoPaterno,' ',a.apellidoMaterno) as nombre from tesis t join autor a on t.id=a.fk_tesis where a.fk_tesis=${id};`;
        const obtenerSinodales = `select d.fk_tesis as id, concat(p.nombre,' ',p.apellidoPaterno,' ',p.apellidoMaterno) from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where d.fk_tesis=${id};`;
        const obtenerDirectores = `select d.fk_tesis as id, concat(p.nombre,' ',p.apellidoPaterno,' ',p.apellidoMaterno) from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where d.fk_tesis=${id};`;
        const obtenerPalabras = `select p.fk_tesis as id, p.fk_palabra as palabra from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_tesis=${id};`;
        const obtenerTesis = `select id,enlaceAPdf,titulo,carrera,grado,year1,resumen from tesis where id=${id};`;
        let autores = [];
        let directores = [];
        let sinodales = [];
        let palabrasClave = [];
        let datosTesis;
        console.log(id);
        connection.query({sql:obtenerAutores, rowsAsArray: true }, (err, result, fields) => {
          
          if (err) {
            console.log(err);
            res.status(404).send("Error obteniendo los datos");
          } else {
            console.log(result);
            result.forEach((row) => {
              autores.push(row.nombre);
            });
          }
        });
        console.log(autores);
        connection.query({sql:obtenerDirectores, rowsAsArray: true }, (err, result, fields) => {
          
          if (err) {
            console.log(err);
            res.status(404).send("Error obteniendo los datos");
          } else {
            
            result.forEach((row) => {
              directores.push(row.nombre);
            });
          }
        });
        console.log(directores);
        connection.query({sql:obtenerSinodales, rowsAsArray: true }, (err, result, fields) => {
          if (err) {

            console.log(err);
            res.status(404).send("Error obteniendo los datos");
          } else {
            result.forEach((row) => {
              sinodales.push(row.nombre);
            });
          }
        });
        console.log(sinodales);
        connection.query({sql:obtenerTesis, rowsAsArray: true }, (err, result, fields) => {
          if (err) {
            console.log(err);
            res.status(404).send("Error obteniendo los datos");
          } else {
            console.log(result);
            datosTesis = result;
          }
        });
        const tes={
          titulo:datosTesis.titulo,
          enlaceAPdf:datosTesis.enlaceAPdf,
          carrera:datosTesis.carrera,
          grado:datosTesis.grado,
          year:datosTesis.year1,
          resumen:datosTesis.resumen,
          autores:autores,
          directores:directores,
          sinodales:sinodales,
          palabrasClave:palabrasClave
        };
        tesis.push(tes);
      });
      res.status(200).send(JSON.stringify(tesis));
    }
  });
});

app.listen(3000, function () {
  console.log("runnin at 3000");
});

app.use(function (req, res) {
  res.status(404).send("Error");
});
