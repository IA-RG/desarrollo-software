const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
//const env = require("./functions/envvar");
const tesisFunctions = require("./functions/tesis");
const consultas = require("./functions/consultas2");
const _ = require("lodash");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", //env.password(),
  database: "proyectotesis",
  charset: "utf8mb4_spanish_ci",
});

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", //env.password(),
  database: "proyectotesis",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: "utf8mb4_spanish_ci",
});

const promisePool = pool.promise();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/profesor/tesis/:id", async (req, res) => {
  const id = req.params.id;
  const resultado = { director: [], sinodal: [] };
  // const [idsdirector,fields]=await promisePool.query(`select distinct fk_tesis as id from director_tesis where fk_director=${id}`);

  promisePool
    .query(
      `select distinct fk_tesis as id from director_tesis where fk_director=${id}`
    )
    .then(async (ids) => {
      resultado.director = await tesisFunctions.obtenerArregloDeTesis(
        promisePool,
        ids[0]
      );
      // console.log(director);
      promisePool
        .query(
          `select distinct fk_tesis as id from sinodal_tesis where fk_sinodal=${id}`
        )
        .then(async (ids) => {
          tesisFunctions
            .obtenerArregloDeTesis(promisePool, ids[0])
            .then((sinodales) => {
              resultado.sinodal = sinodales;
              res.status(200).json(resultado);
            });
          // console.log(sinodal);
        });
    });

  // console.log(idsdirector);
  // console.log(idssinodal);
  // console.log(fields);
  // if(idsdirector.length>0)
  // {
  //   // const director= await tesisFunctions.obtenerArregloDeTesis(idsdirector);
  // }

  // if(idssinodal.length>0)
  // {
  //   const sinodal=await tesisFunctions.obtenerArregloDeTesis(idssinodal);
  // }

  // console.log(director);
  // console.log(sinodal);
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
    pool.escape(formData.consulta)
  );

  // console.log(consulta);
  tesisFunctions
    .obtenerTesis(consulta, promisePool, res)
    .then((tesisResultantes) => {
      console.log(tesisResultantes);
      tesisResultantes.length > 0
        ? res.status(200).send(JSON.stringify({ tesis: tesisResultantes }))
        : res.status(404).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(503).send();
    });
  // console.log(tesisResultantes);
});

app.post("/tesis", (req, res) => {
  let autor1, autor2, autor3, director1, director2, sino1, sino2, sino3, i;
  var palabras = [],
    arrayPalabras = [],
    indexPalabras = [];
  //Aqui almacenamos los id de los autores,
  let idUsuario, idAutor, idTesis;
  let idDirector1, idDirector2, idSinodal1, idSinodal2, idSinodal3;
  //año actual
  let fecha = new Date();
  let fechaActual =
    fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
  let errores = 0;
  //console.log("DENTRO");
  console.log(req.body);
  /*ALMACENAMOS LA INFORMACIÓN*/
  const {
    numeroT,
    titulo,
    autores,
    directores,
    sinodales,
    enlace,
    palabrasClave,
    year,
    carrera,
    grado,
    resumen,
  } = req.body;
  //console.log("titulo: "+titulo+"\n");
  //De esta manera no erramos para la inserción de los datos para la base de datos
  //AUTORES O INTEGRANTES
  let longitud;
  longitud = autores.length;
  //console.log(longitud);
  switch (longitud) {
    case 1:
      autor1 = autores[0].split(",");
      break;
    case 2:
      autor1 = autores[0].split(",");
      autor2 = autores[1].split(",");
      break;
    case 3:
      autor1 = autores[0].split(",");
      autor2 = autores[1].split(",");
      autor3 = autores[2].split(",");
      break;
    default:
      console.log("ERROR");
      break;
  }

  //DIRECTORES DE TESIS
  let longDirectores;
  longDirectores = directores.length;
  switch (longDirectores) {
    case 1:
      director1 = directores[0].split(",");
      break;
    case 2:
      director1 = directores[0].split(",");
      director2 = directores[1].split(",");
      break;
    default:
      console.log("ERROR");
      break;
  }

  //SINODALES DE TESIS
  let longSinodales;
  longSinodales = sinodales.length;
  switch (longSinodales) {
    case 1:
      sino1 = sinodales[0].split(",");
      break;
    case 2:
      sino1 = sinodales[0].split(",");
      sino2 = sinodales[1].split(",");
      break;
    case 3:
      sino1 = sinodales[0].split(",");
      sino2 = sinodales[1].split(",");
      sino3 = sinodales[2].split(",");
      break;

    default:
      console.log("ERROR");
      break;
  }
  //console.log(autor1, autor2, autor3, director1, director2, sino1, sino2, sino3, enlace, palabrasClave, year, carrera, grado, resumen);
  //script de inserción de autor
  //INSERT INTO AUTOR (nombre, apellidoPaterno, apellidoMaterno) VALUES (autor2[0], autor2[1], autor2[2]);
  //EL PRIMERO SE DEBE DE INGRESAR EN LA TABLA DE ESTUDIANTE y hacer un select del id del usuario
  //INSERT INTO estudiante(nombre, apellidoPaterno, apellidoMaterno)VALUES(autor1[0], autor1[1], autor1[2])


      let sql_select_idAutor1_usuario = `SELECT uid FROM estudiante WHERE nombre = '${autor1[0].toString()}' AND apellidoPaterno = '${autor1[1].toString()}' AND apellidoMaterno = '${autor1[2].toString()}'`;
      connection.connect(function (err) {
        if (!err) {
          connection.query(sql_select_idAutor1_usuario, (err, result) => {
            if (!err) {
              let numU = JSON.parse(JSON.stringify(result));
              //console.log("obtenemos el id del usuario");

              if (Object.keys(numU).length === 0) {
                //error
                res.json({
                  status: "500",
                  message: "Error al buscar el usuario proporcionado",
                });
              } else {
                idUsuario = parseInt(numU[0].uid);
                //consle.log("RESULT DENTRO DELA FUNCIÓN: ", idUsuario);
                //BUSCAMOS EL ID DE LA TESIS EN CASO DE QUE EXISTA
                let sql_select_tesis = `SELECT count(*) as registro FROM TESIS Where(titulo = '${titulo}' AND fk_estudiante=${idUsuario})`;
                let sql_insert_tesis = `INSERT INTO tesis(fechaDeRegistro, enlaceAPdf, titulo, carrera, grado, year1, resumen, fk_estudiante) VALUES ('${fechaActual.toString()}', '${enlace.toString()}', '${titulo.toString()}', '${carrera.toString()}', '${grado.toString()}', ${year}, '${resumen.toString()}', ${idUsuario})`;
                connection.query(
                  sql_select_tesis,
                  (errBTesis, resultBTesis) => {
                    if (!errBTesis) {
                      let idTesis_busqueda = parseInt(resultBTesis[0].registro);
                      if (idTesis_busqueda > 0) {
                        res.json({
                          status: "500",
                          message: "DATOS YA INGRESADOS",
                        });
                      } else {
                        //console.log(sql_insert_tesis);
                        connection.query(
                          sql_insert_tesis,
                          (err, resultTesis) => {
                            if (!err) {
                              //console.log("Insertamos la tesis:\n" + sql_insert_tesis + "\n");
                              //se realizo la inserción de forma correcta, ahora obtenemos el numero de id
                              let sql_select_tesis = `SELECT id FROM tesis Where titulo = '${titulo}'`;
                              connection.query(
                                sql_select_tesis,
                                (err, resultIDt) => {
                                  if (!err) {
                                    //console.log("Encontramos el ID de la tesis");
                                    //almacenamos el valor del id de la tesis
                                    let datoConsultaIt = JSON.parse(
                                      JSON.stringify(resultIDt)
                                    );
                                    idTesis = parseInt(datoConsultaIt[0].id);
                                    console.log(idTesis);
                                    //AQUI REALIZAMOS LA INSERCIÓN DE LAS PALABRAS CLAVE, INDEPENDIENTES DE LA ID TESIS
                                    arrayPalabras = palabrasClave.split(",");
                                    for (i = 0; i < arrayPalabras.length; i++)
                                      palabras.push(
                                        _.lowerCase(arrayPalabras[i])
                                      );
                                    //de esta manera no necesitamos tener mas de un for
                                    for (i = 0; i < palabras.length; i++) {
                                      let j = i;
                                      let sql_select_palabrasClave = `SELECT palabra FROM palabraClave Where palabra = ?`;
                                      connection.query(
                                        sql_select_palabrasClave,
                                        [palabras[i]],
                                        (errBusquedaPC, resultBusquedaPC) => {
                                          //console.log(palabras[j]);
                                          if (!errBusquedaPC) {
                                            if (
                                              resultBusquedaPC[0] != undefined
                                            ) {
                                              //console.log("Encontramos las palabras")
                                              //Encontramos la palabra en la base de datos
                                              //AHORA PODEMOS HACER LA INSERCIÓN DE LAS PALABRAS CLAVE REFERENTE EN LA TESIS
                                              let sql_insert_palabrasClave_tesis = `INSERT INTO palabras_tesis(fk_tesis, fk_palabra) VALUES ('${idTesis}', '${palabras[j]}')`;
                                              //console.log(sql_insert_palabrasClave_tesis)
                                              connection.query(
                                                sql_insert_palabrasClave_tesis,
                                                (errorPCTesis, rsultPCSid) => {
                                                  if (errorPCTesis) {
                                                    console.log(
                                                      errorPCTesis.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              //console.log("NO encontramos las palabras")
                                              //La insertamos en la base de datos, palabrasClave
                                              let sql_insert_palabrasClave = `INSERT INTO palabraclave VALUES ('${palabras[j]}')`;
                                              //console.log(sql_insert_palabrasClave)
                                              connection.query(
                                                sql_insert_palabrasClave,
                                                (errPC, resultPCNid) => {
                                                  if (errPC) {
                                                    console.log(errPC.message);
                                                    errores = 1;
                                                  }
                                                  //console.log("INSERTAMOS LAS PALABRAS CLAVE");
                                                }
                                              );
                                              //INSERTAMOS LAS PALABRAS CLAVE EN LA TESIS
                                              //AHORA PODEMOS HACER LA INSERCIÓN DE LAS PALABRAS CLAVE REFERENTE EN LA TESIS
                                              let sql_insert_palabrasClave_tesis = `INSERT INTO palabras_tesis(fk_tesis, fk_palabra) VALUES ('${idTesis}', '${palabras[j]}')`;
                                              //console.log(sql_insert_palabrasClave_tesis)
                                              connection.query(
                                                sql_insert_palabrasClave_tesis,
                                                (errorPCTesis, rsultPCSid) => {
                                                  if (errorPCTesis) {
                                                    console.log(
                                                      errorPCTesis.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                            //no tenemos error
                                          }
                                        }
                                      );
                                    } //termina la iteración de la inserción de las palabras clave
                                    //INSERCIÓN DE LOS PROFESORES
                                    if (longDirectores == 1) {
                                      //Comprobamos que los profesores no existan
                                      let sql_select_profesor_director1 = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                                      connection.query(
                                        sql_select_profesor_director1,
                                        (errorSP1, resultSP1) => {
                                          //no tenemos error
                                          if (!errorSP1) {
                                            let idProfe = JSON.parse(
                                              JSON.stringify(resultSP1)
                                            );

                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_director1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director1[0]}', '${director1[1]}', '${director1[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_director1,
                                                (errDir1, resultDir1) => {
                                                  if (errDir1) {
                                                    console.log(
                                                      "AQUI1 " + errDir1.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_director1_creado = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                                              connection.query(
                                                sql_select_profesor_director1_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idDirector1 = val;
                                                    let sql_insert_directores_tesis1 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector1})`;
                                                    connection.query(
                                                      sql_insert_directores_tesis1,
                                                      (
                                                        errInsertDir,
                                                        resultDir
                                                      ) => {
                                                        if (errInsertDir) {
                                                          console.log(
                                                            "AQUI2 " +
                                                              errInsertDir.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(errBID.message);
                                                    console.log(
                                                      "AQUI 3 " + errBID
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //console.log(val);
                                              idDirector1 = val;
                                              //console.log(idTesis, idDirector1);
                                              let sql_insert_directores_tesis1 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector1})`;
                                              connection.query(
                                                sql_insert_directores_tesis1,
                                                (errInsertDir, resultDir) => {
                                                  if (errInsertDir) {
                                                    console.log(
                                                      "AQUI 4 " +
                                                        errInsertDir.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(
                                              "AQUI 5 " + errorSP1.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                    if (longDirectores == 2) {
                                      //Comprobamos que los profesores no existan
                                      let sql_select_profesor_director1 = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                                      connection.query(
                                        sql_select_profesor_director1,
                                        (errorSP1, resultSP1) => {
                                          //no tenemos error
                                          if (!errorSP1) {
                                            let idProfe = JSON.parse(
                                              JSON.stringify(resultSP1)
                                            );

                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_director1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director1[0]}', '${director1[1]}', '${director1[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_director1,
                                                (errDir1, resultDir1) => {
                                                  if (errDir1) {
                                                    console.log(
                                                      "AQUI1 " + errDir1.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_director1_creado = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                                              connection.query(
                                                sql_select_profesor_director1_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idDirector1 = val;
                                                    let sql_insert_directores_tesis1 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector1})`;
                                                    connection.query(
                                                      sql_insert_directores_tesis1,
                                                      (
                                                        errInsertDir,
                                                        resultDir
                                                      ) => {
                                                        if (errInsertDir) {
                                                          console.log(
                                                            "AQUI2 " +
                                                              errInsertDir.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(errBID.message);
                                                    console.log(
                                                      "AQUI 3 " + errBID
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //console.log(val);
                                              idDirector1 = val;
                                              //console.log(idTesis, idDirector1);
                                              let sql_insert_directores_tesis1 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector1})`;
                                              connection.query(
                                                sql_insert_directores_tesis1,
                                                (errInsertDir, resultDir) => {
                                                  if (errInsertDir) {
                                                    console.log(
                                                      "AQUI 4 " +
                                                        errInsertDir.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(
                                              "AQUI 5 " + errorSP1.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_select_profesor_director2 = `SELECT id FROM profesor WHERE nombre = '${director2[0]}' AND apellidoPaterno = '${director2[1]}' AND apellidoMaterno = '${director2[2]}'`;
                                      //console.log(sql_select_profesor_director2)
                                      connection.query(
                                        sql_select_profesor_director2,
                                        (errorSP2, resultSP2) => {
                                          //no tenemos error
                                          if (!errorSP2) {
                                            //console.log(resultSP2)
                                            let idProfe = JSON.parse(
                                              JSON.stringify(resultSP2)
                                            );
                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_director2 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director2[0]}', '${director2[1]}', '${director2[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_director2,
                                                (errDir2, resultDir2) => {
                                                  if (errDir2) {
                                                    console.log(
                                                      errDir2.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_director2_creado = `SELECT id FROM profesor WHERE nombre = '${director2[0]}' AND apellidoPaterno = '${director2[1]}' AND apellidoMaterno = '${director2[2]}'`;
                                              connection.query(
                                                sql_select_profesor_director2_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idDirector2 = val;
                                                    //console.log(idDirector2);
                                                    let sql_insert_directores_tesis2 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector2})`;
                                                    //console.log(sql_insert_directores_tesis2);
                                                    connection.query(
                                                      sql_insert_directores_tesis2,
                                                      (
                                                        errInsertDir,
                                                        resultDir
                                                      ) => {
                                                        if (errInsertDir) {
                                                          console.log(
                                                            errInsertDir.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(errBID.message);
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //idDirector.push(parseInt(idProfe[0].id));
                                              //console.log(val);
                                              idDirector2 = val;
                                              let sql_insert_directores_tesis2 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector2})`;
                                              connection.query(
                                                sql_insert_directores_tesis2,
                                                (errInsertDir, resultDir) => {
                                                  if (errInsertDir) {
                                                    console.log(
                                                      errInsertDir.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(errorSP2.message);
                                            res.json({
                                              status: "500",
                                              message:
                                                "Error al buscar el id del profesor",
                                            });
                                          }
                                        }
                                      );
                                    }
                                    if (longSinodales == 1) {
                                      //console.log("ESTA LLENO EL 1");
                                      let sql_select_profesor_sinodal1 = `SELECT id FROM profesor WHERE nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                                      connection.query(
                                        sql_select_profesor_sinodal1,
                                        (errorSPS1, resultSPS1) => {
                                          //no tenemos error
                                          if (!errorSPS1) {
                                            let idProfe = 0;
                                            idProfe = JSON.parse(
                                              JSON.stringify(resultSPS1)
                                            );
                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_sinodal1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino1[0]}', '${sino1[1]}', '${sino1[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_sinodal1,
                                                (errSino1, resultSino1) => {
                                                  if (errSino1) {
                                                    console.log(
                                                      "ERROR SINO 1 " +
                                                        errSino1.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_sinodal1_creado = `SELECT id FROM profesor WHERE nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                                              connection.query(
                                                sql_select_profesor_sinodal1_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idSinodal1 = val;
                                                    let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                                    connection.query(
                                                      sql_insert_sinodal_tesis1,
                                                      (
                                                        errSinodal,
                                                        resultSinodal
                                                      ) => {
                                                        if (errSinodal) {
                                                          console.log(
                                                            "error SINO 1,2 " +
                                                              errSinodal.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(
                                                      "ERROR SINO 1,3 " +
                                                        errBID.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //idSinodal.push(parseInt(idProfe[0].id));
                                              //console.log(val);
                                              idSinodal1 = val;
                                              let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                              //console.log(sql_insert_sinodal_tesis1);
                                              connection.query(
                                                sql_insert_sinodal_tesis1,
                                                (errSinodal, resultSinodal) => {
                                                  if (errSinodal) {
                                                    console.log(
                                                      "error sino1,4 " +
                                                        errSinodal.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(
                                              "error sino 1,5 " +
                                                errorSPS1.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                    if (longSinodales == 2) {
                                      //console.log("ESTA LLENO EL 1");
                                      let sql_select_profesor_sinodal1 = `SELECT id FROM profesor WHERE nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                                      connection.query(
                                        sql_select_profesor_sinodal1,
                                        (errorSPS1, resultSPS1) => {
                                          //no tenemos error
                                          if (!errorSPS1) {
                                            let idProfe = 0;
                                            idProfe = JSON.parse(
                                              JSON.stringify(resultSPS1)
                                            );
                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_sinodal1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino1[0]}', '${sino1[1]}', '${sino1[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_sinodal1,
                                                (errSino1, resultSino1) => {
                                                  if (errSino1) {
                                                    console.log(
                                                      "ERROR SINO 1 " +
                                                        errSino1.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_sinodal1_creado = `SELECT id FROM profesor WHERE nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                                              connection.query(
                                                sql_select_profesor_sinodal1_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idSinodal1 = val;
                                                    let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                                    connection.query(
                                                      sql_insert_sinodal_tesis1,
                                                      (
                                                        errSinodal,
                                                        resultSinodal
                                                      ) => {
                                                        if (errSinodal) {
                                                          console.log(
                                                            "error SINO 1,2 " +
                                                              errSinodal.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(
                                                      "ERROR SINO 1,3 " +
                                                        errBID.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //idSinodal.push(parseInt(idProfe[0].id));
                                              //console.log(val);
                                              idSinodal1 = val;
                                              let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                              //console.log(sql_insert_sinodal_tesis1);
                                              connection.query(
                                                sql_insert_sinodal_tesis1,
                                                (errSinodal, resultSinodal) => {
                                                  if (errSinodal) {
                                                    console.log(
                                                      "error sino1,4 " +
                                                        errSinodal.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(
                                              "error sino 1,5 " +
                                                errorSPS1.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_select_profesor_sinodal2 = `SELECT id FROM profesor WHERE nombre = '${sino2[0]}' AND apellidoPaterno = '${sino2[1]}' AND apellidoMaterno = '${sino2[2]}'`;
                                      connection.query(
                                        sql_select_profesor_sinodal2,
                                        (errorSPS2, resultSPS2) => {
                                          //no tenemos error
                                          if (!errorSPS2) {
                                            let idProfe = 0;
                                            idProfe = JSON.parse(
                                              JSON.stringify(resultSPS2)
                                            );
                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_sinodal2 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino2[0]}', '${sino2[1]}', '${sino2[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_sinodal2,
                                                (errSino2, resultSino2) => {
                                                  if (errSino2) {
                                                    console.log(
                                                      errSino2.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_sinodal2_creado = `SELECT id FROM profesor WHERE nombre = '${sino2[0]}' AND apellidoPaterno = '${sino2[1]}' AND apellidoMaterno = '${sino2[2]}'`;
                                              connection.query(
                                                sql_select_profesor_sinodal2_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idSinodal2 = val;
                                                    let sql_insert_sinodal_tesis2 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal2})`;
                                                    connection.query(
                                                      sql_insert_sinodal_tesis2,
                                                      (
                                                        errSinodal,
                                                        resultSinodal
                                                      ) => {
                                                        if (errSinodal) {
                                                          console.log(
                                                            errSinodal.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(errBID.message);
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //console.log(val);
                                              //idSinodal.push(parseInt(idProfe[0].id));
                                              idSinodal2 = val;
                                              let sql_insert_sinodal_tesis2 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal2})`;
                                              connection.query(
                                                sql_insert_sinodal_tesis2,
                                                (errSinodal, resultSinodal) => {
                                                  if (errSinodal) {
                                                    console.log(
                                                      errSinodal.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(errorSPS2.message);
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                    if (longSinodales == 3) {
                                      let sql_select_profesor_sinodal1 = `SELECT id FROM profesor WHERE nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                                      connection.query(
                                        sql_select_profesor_sinodal1,
                                        (errorSPS1, resultSPS1) => {
                                          //no tenemos error
                                          if (!errorSPS1) {
                                            let idProfe = 0;
                                            idProfe = JSON.parse(
                                              JSON.stringify(resultSPS1)
                                            );
                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_sinodal1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino1[0]}', '${sino1[1]}', '${sino1[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_sinodal1,
                                                (errSino1, resultSino1) => {
                                                  if (errSino1) {
                                                    console.log(
                                                      "ERROR SINO 1 " +
                                                        errSino1.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_sinodal1_creado = `SELECT id FROM profesor WHERE nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                                              connection.query(
                                                sql_select_profesor_sinodal1_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idSinodal1 = val;
                                                    let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                                    connection.query(
                                                      sql_insert_sinodal_tesis1,
                                                      (
                                                        errSinodal,
                                                        resultSinodal
                                                      ) => {
                                                        if (errSinodal) {
                                                          console.log(
                                                            "error SINO 1,2 " +
                                                              errSinodal.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(
                                                      "ERROR SINO 1,3 " +
                                                        errBID.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //idSinodal.push(parseInt(idProfe[0].id));
                                              //console.log(val);
                                              idSinodal1 = val;
                                              let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                              //console.log(sql_insert_sinodal_tesis1);
                                              connection.query(
                                                sql_insert_sinodal_tesis1,
                                                (errSinodal, resultSinodal) => {
                                                  if (errSinodal) {
                                                    console.log(
                                                      "error sino1,4 " +
                                                        errSinodal.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(
                                              "error sino 1,5 " +
                                                errorSPS1.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_select_profesor_sinodal2 = `SELECT id FROM profesor WHERE nombre = '${sino2[0]}' AND apellidoPaterno = '${sino2[1]}' AND apellidoMaterno = '${sino2[2]}'`;
                                      connection.query(
                                        sql_select_profesor_sinodal2,
                                        (errorSPS2, resultSPS2) => {
                                          //no tenemos error
                                          if (!errorSPS2) {
                                            let idProfe = 0;
                                            idProfe = JSON.parse(
                                              JSON.stringify(resultSPS2)
                                            );
                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_sinodal2 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino2[0]}', '${sino2[1]}', '${sino2[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_sinodal2,
                                                (errSino2, resultSino2) => {
                                                  if (errSino2) {
                                                    console.log(
                                                      errSino2.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_sinodal2_creado = `SELECT id FROM profesor WHERE nombre = '${sino2[0]}' AND apellidoPaterno = '${sino2[1]}' AND apellidoMaterno = '${sino2[2]}'`;
                                              connection.query(
                                                sql_select_profesor_sinodal2_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idSinodal2 = val;
                                                    let sql_insert_sinodal_tesis2 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal2})`;
                                                    connection.query(
                                                      sql_insert_sinodal_tesis2,
                                                      (
                                                        errSinodal,
                                                        resultSinodal
                                                      ) => {
                                                        if (errSinodal) {
                                                          console.log(
                                                            errSinodal.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(errBID.message);
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //console.log(val);
                                              //idSinodal.push(parseInt(idProfe[0].id));
                                              idSinodal2 = val;
                                              let sql_insert_sinodal_tesis2 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal2})`;
                                              connection.query(
                                                sql_insert_sinodal_tesis2,
                                                (errSinodal, resultSinodal) => {
                                                  if (errSinodal) {
                                                    console.log(
                                                      errSinodal.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(errorSPS2.message);
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_select_profesor_sinodal3 = `SELECT id FROM profesor WHERE nombre = '${sino3[0]}' AND apellidoPaterno = '${sino3[1]}' AND apellidoMaterno = '${sino3[2]}'`;
                                      connection.query(
                                        sql_select_profesor_sinodal3,
                                        (errorSPS3, resultSPS3) => {
                                          //no tenemos error
                                          if (!errorSPS3) {
                                            let idProfe = 0;
                                            idProfe = JSON.parse(
                                              JSON.stringify(resultSPS3)
                                            );
                                            if (
                                              Object.keys(idProfe).length === 0
                                            ) {
                                              //no encontramos nada, insertamos
                                              let sql_insert_profesor_sinodal3 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino3[0]}', '${sino3[1]}', '${sino3[2]}')`;
                                              connection.query(
                                                sql_insert_profesor_sinodal3,
                                                (errSino3, resultSino3) => {
                                                  if (errSino3) {
                                                    console.log(
                                                      errSino3.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                              let sql_select_profesor_sinodal3_creado = `SELECT id FROM profesor WHERE nombre = '${sino3[0]}' AND apellidoPaterno = '${sino3[1]}' AND apellidoMaterno = '${sino3[2]}'`;
                                              connection.query(
                                                sql_select_profesor_sinodal3_creado,
                                                (errBID, resultBID) => {
                                                  if (!errBID) {
                                                    let idBusqueda = JSON.parse(
                                                      JSON.stringify(resultBID)
                                                    );
                                                    let val = parseInt(
                                                      idBusqueda[0].id
                                                    );
                                                    idSinodal3 = val;
                                                    let sql_insert_sinodal_tesis3 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal3})`;
                                                    connection.query(
                                                      sql_insert_sinodal_tesis3,
                                                      (
                                                        errSinodal,
                                                        resultSinodal
                                                      ) => {
                                                        if (errSinodal) {
                                                          console.log(
                                                            errSinodal.message
                                                          );
                                                          errores = 1;
                                                        }
                                                      }
                                                    );
                                                  } else {
                                                    console.log(errBID.message);
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            } else {
                                              let val = parseInt(idProfe[0].id);
                                              //console.log(val);
                                              //idSinodal.push(parseInt(idProfe[0].id));
                                              idSinodal3 = val;
                                              let sql_insert_sinodal_tesis3 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal3})`;
                                              connection.query(
                                                sql_insert_sinodal_tesis3,
                                                (errSinodal, resultSinodal) => {
                                                  if (errSinodal) {
                                                    console.log(
                                                      errSinodal.message
                                                    );
                                                    errores = 1;
                                                  }
                                                }
                                              );
                                            }
                                          } else {
                                            console.log(errorSPS3.message);
                                            res.json({
                                              status: "500",
                                              message:
                                                "Error al buscar el id del profesor",
                                            });
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                    //INSERCION DE LOS AUTORES
                                    if (longitud == 2) {
                                      let sql_insert_autor2 = `INSERT INTO AUTOR(nombre, apellidoPaterno, apellidoMaterno, fk_tesis) VALUES ('${autor2[0]}', '${autor2[1]}', '${autor2[2]}', ${idTesis})`;
                                      connection.query(
                                        sql_insert_autor2,
                                        (errorAutor2, resultAutor2) => {
                                          if (errorAutor2) {
                                            console.log(errorAutor2.message);
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                    if (longitud == 3) {
                                                                           
                                      let sql_insert_autor2 = `INSERT INTO AUTOR(nombre, apellidoPaterno, apellidoMaterno, fk_tesis) VALUES ('${autor2[0]}', '${autor2[1]}', '${autor2[2]}', ${idTesis})`;
                                      connection.query(
                                        sql_insert_autor2,
                                        (errorAutor2, resultAutor2) => {
                                          if (errorAutor2) {
                                            console.log(errorAutor2.message);
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_insert_autor3 = `INSERT INTO AUTOR(nombre, apellidoPaterno, apellidoMaterno, fk_tesis) VALUES ('${autor3[0]}', '${autor3[1]}', '${autor3[2]}', ${idTesis})`;
                                      connection.query(
                                        sql_insert_autor3,
                                        (errorAutor3, resultAutor3) => {
                                          if (errorAutor3) {
                                            console.log(errorAutor3.message);
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                    if (errores == 1) {
                                      res.json({
                                        status: "400",
                                        message: "ERROR AL INSERTAR LOS DATOS",
                                      });
                                    } else {
                                      res.json({
                                        status: "200",
                                        message: "Creación correcta",
                                      });
                                    }
                                  } else {
                                    console.log(err.message);
                                    res.json({
                                      status: "500",
                                      message:
                                        "Error al buscar el id de la tesis",
                                    });
                                    errores = 1;
                                  }
                                }
                              );
                            } else {
                              console.log(err.message);
                              res.json({
                                status: "500",
                                message: "Error al insertar la tesis",
                              });
                              errores = 1;
                            }
                          }
                        );
                      }
                    }
                  }
                );
              }
            } else {
              console.log(err.message);
              res.json({
                status: "500",
                message: "Error al buscar el usuario proporcionado 1",
              });
              errores = 1;
            }
          });
        } else {
          res.json({
            status: "500",
            message: "Error al tener conexión con la base de datos",
          });
          errores = 1;
        }
      });

  idUsuario = 0;
  idAutor = 0;
  idTesis = 0;
  idDirector1 = 0;
  idDirector2 = 0;
  idSinodal1 = 0;
  idSinodal2 = 0;
  idSinodal3 = 0;
});

app.post("/protocolos", (req, res)=>{
  let autor1, autor2, autor3, director1, director2, sino1, sino2, sino3, i;
  var palabras = [],
    arrayPalabras = [],
    indexPalabras = [];
  //Aqui almacenamos los id de los autores,
  let idUsuario, idAutor, idProto;
  let idDirector1, idDirector2, idSinodal1, idSinodal2, idSinodal3;
  //año actual
  let fecha = new Date();
  let fechaActual =
    fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
  let errores = 0;
  //console.log("DENTRO");
  console.log(req.body);
  /*ALMACENAMOS LA INFORMACIÓN*/
  const {  titulo,  autores, directores,  sinodales,  enlace,  palabrasClave,  year,  carrera,  grado,  resumen,} = req.body;
  let longitud;
  //Autores protocolo
  longitud = autores.length;
  switch(longitud){
    case 1: 
      autor1 = autores[0].split(',');
    break;
    case 2: 
      autor1 = autores[0].split(',');
      autor2 = autores[1].split(',');
    break;
    case 3:
      autor1 = autores[0].split(',');
      autor2 = autores[1].split(',');
      autor3 = autores[2].split(',');
    break;
    default:
      console.log("Error con los autores, longitud: "+longitud);
    break;
  }
  //Directores protocolos
  let longDirectores;
  longDirectores = directores.length;
  switch (longDirectores) {
    case 1:
      director1 = directores[0].split(',');
    break;
    case 2:
      director1 = directores[0].split(',');
      director2 = directores[1].split(',');
    break;
    default:
      console.log('Error con los directores, longitud: '+longDirectores);
    break;
  }
  //Sinodales protocolos
  let longSino;
  longSino = sinodales.length;
  switch(longSino){
    case 1:
      sino1 = sinodales[0].split(',');
    break;
    case 2:
      sino1 = sinodales[0].split(',');
      sino2 = sinodales[1].split(',');
    break;
    case 3:
      sino1 = sinodales[0].split(',');
      sino2 = sinodales[1].split(',');
      sino3 = sinodales[2].split(',');
    break;
    default:
      console.log('Error con los sinodales, longitud: '+longSino);
    break;
  }
  
      let sql_select_idAutor1_usuario = `SELECT uid FROM estudiante WHERE nombre = '${autor1[0]}' AND apellidoPaterno = '${autor1[1]}' AND apellidoMaterno = '${autor1[2]}'`;
      //console.log("ID SINODAL 1", sino1[1][0],sino1[1][1], sino1[1][2], sino1[1][3]);
      
      //console.log(idSinodal1, idSinodal2, idSinodal3);
      //console.log(sql_select_idAutor1_usuario);
      
      connection.query(sql_select_idAutor1_usuario, (err, result)=>{
        if(!err){
          //console.log(result[0].uid);
          let numU = JSON.parse(JSON.stringify(result));
          if(Object.keys(numU).length === 0){//error
            res.json({status: "500", message: 'Error al buscar el id del usuario'});
          }else{
            idUsuario = parseInt(numU[0].uid);
            //Buscamos que exista el ID del protocolo
            let sql_select_protocolo = `SELECT count(*) as registro FROM protocolo Where(titulo = '${titulo}' AND fk_estudiante=${idUsuario})`;
            //console.log(sql_select_protocolo)
            let sql_insert_protocolo = `INSERT INTO protocolo (fechaDeRegistro, enlaceAPdf, titulo, carrera, grado, year1, resumen, fk_estudiante) VALUES ('${fechaActual}', '${enlace}', '${titulo}', '${carrera}', '${grado}', ${year}, '${resumen}', ${idUsuario})`;
            connection.query(sql_select_protocolo, (errBprotocolo, resultBprotocolo)=>{
              if(!errBprotocolo){
                let id_busquedaProto = parseInt(resultBprotocolo[0].registro);
                if(id_busquedaProto > 0){//encontramos un protocolo con los datos
                  res.json({status: '500', message: 'DATOS YA REGISTRADOS'});
                }else{
                  //no encontramos un registro, insertamos los datos a la base
                  ///console.log(sql_insert_protocolo)
                  connection.query(sql_insert_protocolo, (errInsertProto, resultInsertProto)=>{
                    //console.log(sql_insert_protocolo);
                    if(!errInsertProto){
                      let sql_select_protocolo = `SELECT id FROM protocolo Where titulo = '${titulo}'`;
                      connection.query(sql_select_protocolo, (errSelectProto, resultSelectProto)=>{
                        if(!errSelectProto){
                          let consultaID = JSON.parse(JSON.stringify(resultSelectProto));
                          idProto = parseInt(consultaID[0].id);
                          console.log("idProtocolo: "+idProto);
                          arrayPalabras = palabrasClave.split(',');
                          for(i=0; i< arrayPalabras.length; i++)
                            palabras.push(_.lowerCase(arrayPalabras[i]));
    
                            for(i=0; i< palabras.length; i++){
                              let j = i;
                              let sql_select_palabrasClave = `SELECT palabra FROM palabraClave Where palabra = ?`;
                              connection.query(sql_select_palabrasClave, [palabras[i]], (errBusquedaPalabras, resultBusquedaPalabras)=>{
                                if(!errBusquedaPalabras){
                                  if(resultBusquedaPalabras[0] != undefined){//tenemos la palabra en la tabla de palabras clave
                                    let sql_insert_palabrasClave_protocolo = `INSERT INTO palabras_protocolo(fk_protocolo, fk_palabra) VALUES ('${idProto}', '${palabras[j]}')`;
                                    connection.query(sql_insert_palabrasClave_protocolo, (errPCprotocolo, resultPCprotocolo)=>{
                                      if(errPCprotocolo){
                                        console.log(errPCprotocolo.message);
                                        errores = 1;
                                      }
                                    });
                                  }else{//no tenemos la palabra clave
                                    let sql_insert_palabrasClave  = `INSERT INTO palabraclave VALUES ('${palabras[j]}')`;;
                                    connection.query(sql_insert_palabrasClave, (errorPCInsert, resultPCInsert)=>{
                                      if(errorPCInsert){
                                        console.log(errorPCInsert.message);
                                        errores = 1;
                                      }
                                    });
                                    //insertamos las palabras a la tabla de protocolos
                                    let sql_insert_palabrasClave_protocolo = `INSERT INTO palabras_protocolo(fk_protocolo, fk_palabra) VALUES ('${idProto}', '${palabras[j]}')`;
                                    connection.query(sql_insert_palabrasClave_protocolo, (errInsertPCp, resultInsertPCp)=>{
                                      if(errInsertPCp){
                                        console.log(errInsertPCp.message);
                                        errores = 1;
                                      }
                                    });
                                  }
                                }
                              });
                            }//termino de la inserción de las palabras clave
                            //INSERCION DE PROFESORES
                            //directores
                            if (longDirectores == 1) {
                              //Comprobamos que los profesores no existan
                              let sql_select_profesor_director1 = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                              connection.query(
                                sql_select_profesor_director1,
                                (errorSP1, resultSP1) => {
                                  //no tenemos error
                                  if (!errorSP1) {
                                    let idProfe = JSON.parse(
                                      JSON.stringify(resultSP1)
                                    );
                          
                                    if (
                                      Object.keys(idProfe).length === 0
                                    ) {
                                      //no encontramos nada, insertamos
                                      let sql_insert_profesor_director1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director1[0]}', '${director1[1]}', '${director1[2]}')`;
                                      connection.query(
                                        sql_insert_profesor_director1,
                                        (errDir1, resultDir1) => {
                                          if (errDir1) {
                                            console.log(
                                              "AQUI1 " + errDir1.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_select_profesor_director1_creado = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                                      connection.query(
                                        sql_select_profesor_director1_creado,
                                        (errBID, resultBID) => {
                                          if (!errBID) {
                                            let idBusqueda = JSON.parse(
                                              JSON.stringify(resultBID)
                                            );
                                            let val = parseInt(
                                              idBusqueda[0].id
                                            );
                                            idDirector1 = val;
                                            let sql_insert_directores_protocolo1 = `INSERT INTO director_protocolo (fk_protocolo, fk_director) VALUES (${idProto}, ${idDirector1})`;
                                            connection.query(
                                              sql_insert_directores_protocolo1,
                                              (
                                                errInsertDir,
                                                resultDir
                                              ) => {
                                                if (errInsertDir) {
                                                  console.log(
                                                    "AQUI2 " +
                                                      errInsertDir.message
                                                  );
                                                  errores = 1;
                                                }
                                              }
                                            );
                                          } else {
                                            console.log(errBID.message);
                                            console.log(
                                              "AQUI 3 " + errBID
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    } else {
                                      let val = parseInt(idProfe[0].id);
                                      //console.log(val);
                                      idDirector1 = val;
                                      //console.log(idTesis, idDirector1);
                                      let sql_insert_directores_protocolo1 = `INSERT INTO director_protocolo (fk_protocolo, fk_director) VALUES (${idProto}, ${idDirector1})`;
                                      connection.query(
                                        sql_insert_directores_protocolo1,
                                        (errInsertDir, resultDir) => {
                                          if (errInsertDir) {
                                            console.log(
                                              "AQUI 4 " +
                                                errInsertDir.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                  } else {
                                    console.log(
                                      "AQUI 5 " + errorSP1.message
                                    );
                                    errores = 1;
                                  }
                                }
                              );
                            }
                            if (longDirectores == 2) {
                              //Comprobamos que los profesores no existan
                              let sql_select_profesor_director1 = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                              connection.query(
                                sql_select_profesor_director1,
                                (errorSP1, resultSP1) => {
                                  //no tenemos error
                                  if (!errorSP1) {
                                    let idProfe = JSON.parse(
                                      JSON.stringify(resultSP1)
                                    );
                          
                                    if (
                                      Object.keys(idProfe).length === 0
                                    ) {
                                      //no encontramos nada, insertamos
                                      let sql_insert_profesor_director1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director1[0]}', '${director1[1]}', '${director1[2]}')`;
                                      connection.query(
                                        sql_insert_profesor_director1,
                                        (errDir1, resultDir1) => {
                                          if (errDir1) {
                                            console.log(
                                              "AQUI1 " + errDir1.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_select_profesor_director1_creado = `SELECT id FROM profesor WHERE nombre = '${director1[0]}' AND apellidoPaterno = '${director1[1]}' AND apellidoMaterno = '${director1[2]}'`;
                                      connection.query(
                                        sql_select_profesor_director1_creado,
                                        (errBID, resultBID) => {
                                          if (!errBID) {
                                            let idBusqueda = JSON.parse(
                                              JSON.stringify(resultBID)
                                            );
                                            let val = parseInt(
                                              idBusqueda[0].id
                                            );
                                            idDirector1 = val;
                                            let sql_insert_directores_protocolo1 = `INSERT INTO director_protocolo (fk_protocolo, fk_director) VALUES (${idProto}, ${idDirector1})`;
                                            connection.query(
                                              sql_insert_directores_protocolo1,
                                              (
                                                errInsertDir,
                                                resultDir
                                              ) => {
                                                if (errInsertDir) {
                                                  console.log(
                                                    "AQUI2 " +
                                                      errInsertDir.message
                                                  );
                                                  errores = 1;
                                                }
                                              }
                                            );
                                          } else {
                                            console.log(errBID.message);
                                            console.log(
                                              "AQUI 3 " + errBID
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    } else {
                                      let val = parseInt(idProfe[0].id);
                                      //console.log(val);
                                      idDirector1 = val;
                                      //console.log(idTesis, idDirector1);
                                      let sql_insert_directores_protocolo1 = `INSERT INTO director_protocolo (fk_protocolo, fk_director) VALUES (${idProto}, ${idDirector1})`;
                                      connection.query(
                                        sql_insert_directores_protocolo1,
                                        (errInsertDir, resultDir) => {
                                          if (errInsertDir) {
                                            console.log(
                                              "AQUI 4 " +
                                                errInsertDir.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                  } else {
                                    console.log(
                                      "AQUI 5 " + errorSP1.message
                                    );
                                    errores = 1;
                                  }
                                }
                              );
                              let sql_select_profesor_director2 = `SELECT id FROM profesor WHERE nombre = '${director2[0]}' AND apellidoPaterno = '${director2[1]}' AND apellidoMaterno = '${director2[2]}'`;
                              //console.log(sql_select_profesor_director2)
                              connection.query(
                                sql_select_profesor_director2,
                                (errorSP2, resultSP2) => {
                                  //no tenemos error
                                  if (!errorSP2) {
                                    //console.log(resultSP2)
                                    let idProfe = JSON.parse(
                                      JSON.stringify(resultSP2)
                                    );
                                    if (
                                      Object.keys(idProfe).length === 0
                                    ) {
                                      //no encontramos nada, insertamos
                                      let sql_insert_profesor_director2 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director2[0]}', '${director2[1]}', '${director2[2]}')`;
                                      connection.query(
                                        sql_insert_profesor_director2,
                                        (errDir2, resultDir2) => {
                                          if (errDir2) {
                                            console.log(
                                              errDir2.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                      let sql_select_profesor_director2_creado = `SELECT id FROM profesor WHERE nombre = '${director2[0]}' AND apellidoPaterno = '${director2[1]}' AND apellidoMaterno = '${director2[2]}'`;
                                      connection.query(
                                        sql_select_profesor_director2_creado,
                                        (errBID, resultBID) => {
                                          if (!errBID) {
                                            let idBusqueda = JSON.parse(
                                              JSON.stringify(resultBID)
                                            );
                                            let val = parseInt(
                                              idBusqueda[0].id
                                            );
                                            idDirector2 = val;
                                            //console.log(idDirector2);
                                            let sql_insert_directores_protocolo2 = `INSERT INTO director_protocolo (fk_protocolo, fk_director) VALUES (${idProto}, ${idDirector2})`;
                                            //console.log(sql_insert_directores_tesis2);
                                            connection.query(
                                              sql_insert_directores_protocolo2,
                                              (
                                                errInsertDir,
                                                resultDir
                                              ) => {
                                                if (errInsertDir) {
                                                  console.log(
                                                    errInsertDir.message
                                                  );
                                                  errores = 1;
                                                }
                                              }
                                            );
                                          } else {
                                            console.log(errBID.message);
                                            errores = 1;
                                          }
                                        }
                                      );
                                    } else {
                                      let val = parseInt(idProfe[0].id);
                                      //idDirector.push(parseInt(idProfe[0].id));
                                      //console.log(val);
                                      idDirector2 = val;
                                      let sql_insert_directores_protocolo2 = `INSERT INTO director_protocolo (fk_protocolo, fk_director) VALUES (${idProto}, ${idDirector2})`;
                                      connection.query(
                                        sql_insert_directores_protocolo2,
                                        (errInsertDir, resultDir) => {
                                          if (errInsertDir) {
                                            console.log(
                                              errInsertDir.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                  } else {
                                    console.log(errorSP2.message);
                                    res.json({
                                      status: "500",
                                      message:
                                        "Error al buscar el id del profesor",
                                    });
                                  }
                                }
                              );
                            }
                            //sinodales
                            if (longSino == 1) {
                              let sql_select_profesorUsuario = `SELECT uid FROM profesorusuario Where nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                              connection.query(sql_select_profesorUsuario, (erroSino1, resultSino1)=>{
                                if(!erroSino1){
                                  let consultaID =  JSON.parse(JSON.stringify(resultSino1));
                                  if(Object.keys(consultaID).length ===0){
                                    //console.log("NO SE ENCUENTRA EL NUMERO DE PROFESOR");   insertamos en el profesor usuario
                                    idSinodal1 = sino1[1][0]+sino1[1][1]+sino1[1][2]+sino1[1][3]+''+Math.floor(Math.random()*100+0);
                                    let sql_insert_profesorUsuario = `INSERT INTO profesorusuario(nombre, apellidoPaterno, apellidoMaterno, uid) VALUES ('${sino1[0]}', '${sino1[1]}', '${sino1[2]}', '${idSinodal1}')`;
                                    connection.query(sql_insert_profesorUsuario, (errorSino, resultSino)=>{
                                      if(errorSino){
                                        console.log("Error al crear el profesor usuario");
                                        errores = 1;
                                      }else{
                                        //como creamos al profesor, insertamos directamente en la tabla de sinodal protocolo
                                        let sql_insert_sinodal_protocolo1 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal1}')`;
                                          connection.query(
                                            sql_insert_sinodal_protocolo1,
                                            (errSinodal,resultSinodal) => {
                                              if (errSinodal) {
                                                console.log(
                                                  "error SINO 1,2 " +
                                                    errSinodal.message
                                                );
                                                errores = 1;
                                              }
                                            }
                                          );
                                        
                                      }
                                    });

                                  }else{
                                    idSinodal1 = consultaID[0].uid;
                                    //console.log("ECONTRAMOS AL USUARIO", idSinodal1)
                                    //INSERTAMOS EN LA TABLA DE sinodal_protocolo
                                    let sql_insert_sinodal_protocolo1 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, ${idSinodal1})`;
                                    connection.query(
                                      sql_insert_sinodal_protocolo1,
                                      (
                                        errSinodal,
                                        resultSinodal
                                      ) => {
                                        if (errSinodal) {
                                          console.log(
                                            "error SINO 1,2 " +
                                              errSinodal.message
                                          );
                                          errores = 1;
                                        }
                                      }
                                    );
                                  }
                                  
                                  
                                }
                              });
                            }

                            if (longSino == 2) {
                              let sql_select_profesorUsuario = `SELECT uid FROM profesorusuario Where nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                              connection.query(sql_select_profesorUsuario, (erroSino1, resultSino1)=>{
                                if(!erroSino1){
                                  let consultaID =  JSON.parse(JSON.stringify(resultSino1));
                                  if(Object.keys(consultaID).length ===0){
                                    //console.log("NO SE ENCUENTRA EL NUMERO DE PROFESOR");   insertamos en el profesor usuario
                                    idSinodal1 = sino1[1][0]+sino1[1][1]+sino1[1][2]+sino1[1][3]+''+Math.floor(Math.random()*100+0);
                                    let sql_insert_profesorUsuario = `INSERT INTO profesorusuario(nombre, apellidoPaterno, apellidoMaterno, uid) VALUES ('${sino1[0]}', '${sino1[1]}', '${sino1[2]}', '${idSinodal1}')`;
                                    connection.query(sql_insert_profesorUsuario, (errorSino, resultSino)=>{
                                      if(errorSino){
                                        console.log("Error al crear el profesor usuario");
                                      }else{
                                        //como creamos al profesor, insertamos directamente en la tabla de sinodal protocolo
                                        let sql_insert_sinodal_protocolo1 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal1}')`;
                                          connection.query(
                                            sql_insert_sinodal_protocolo1,
                                            (errSinodal,resultSinodal) => {
                                              if (errSinodal) {
                                                console.log(
                                                  "error SINO 1,2 " +
                                                    errSinodal.message
                                                );
                                                errores = 1;
                                              }
                                            }
                                          );
                                        
                                      }
                                    });
                          
                                  }else{
                                    idSinodal1 = consultaID[0].uid;
                                    //console.log("ECONTRAMOS AL USUARIO", idSinodal1)
                                    //INSERTAMOS EN LA TABLA DE sinodal_protocolo
                                    let sql_insert_sinodal_protocolo1 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal1}')`;
                                    connection.query(
                                      sql_insert_sinodal_protocolo1,
                                      (
                                        errSinodal,
                                        resultSinodal
                                      ) => {
                                        if (errSinodal) {
                                          console.log(
                                            "error SINO 1,2 " +
                                              errSinodal.message
                                          );
                                          errores = 1;
                                        }
                                      }
                                    );
                                  }
                                  
                                  
                                }
                              });
                              //SEGUNDO SINODAL
                              let sql_select_profesorUsuario_sino2 = `SELECT uid FROM profesorusuario WHERE nombre = '${sino2[0]}' AND apellidoPaterno = '${sino2[1]}' AND apellidoMaterno = '${sino2[2]}'`;
                              connection.query(
                                sql_select_profesorUsuario_sino2,
                                (errorSPS2, resultSPS2) => {
                                  //no tenemos error
                                  if (!errorSPS2) {
                                    let idProfe = 0;
                                    idProfe = JSON.parse(JSON.stringify(resultSPS2));
                                    if (Object.keys(idProfe).length === 0) {
                                      //no encontramos nada, insertamos
                                      idSinodal2 = sino2[1][0]+sino2[1][1]+sino2[1][2]+sino2[1][3]+''+Math.floor(Math.random()*100+0);//clave
                                      let sql_insert_profesorUsuario_sinodal2 = `INSERT INTO profesorusuario(nombre, apellidoPaterno, apellidoMaterno, uid) VALUES ('${sino2[0]}', '${sino2[1]}', '${sino2[2]}', '${idSinodal2}')`;
                                      connection.query(sql_insert_profesorUsuario_sinodal2,(errSino2, resultSino2) => {
                                          if (errSino2) {
                                            console.log(errSino2.message);
                                            errores = 1;
                                          }else{
                                              //Como creamos al profesor, insertamos directamente en la tabla de sinodal protocolo
                                              let sql_insert_sinodal_protocolo2 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal2}')`;
                                              connection.query(
                                              sql_insert_sinodal_protocolo2,
                                              (
                                                errSinodal,
                                                resultSinodal
                                              ) => {
                                                if (errSinodal) {
                                                  console.log(
                                                    errSinodal.message
                                                  );
                                                  errores = 1;
                                                }
                                              }
                                            );
                                          }
                                        });
                                    } else {
                                      idSinodal2 = idProfe[0].uid;
                                      //INSERTAMOS EN LA TABLA DE sinodal_protocolo
                                      let sql_insert_sinodal_protocolo2 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal2}')`;
                                      connection.query(
                                        sql_insert_sinodal_protocolo2,
                                        (errSinodal, resultSinodal) => {
                                          if (errSinodal) {
                                            console.log(
                                              errSinodal.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                  }
                                }
                              );
                            }

                            if (longSino == 3) {
                              let sql_select_profesorUsuario = `SELECT uid FROM profesorusuario Where nombre = '${sino1[0]}' AND apellidoPaterno = '${sino1[1]}' AND apellidoMaterno = '${sino1[2]}'`;
                              connection.query(sql_select_profesorUsuario, (erroSino1, resultSino1)=>{
                                if(!erroSino1){
                                  let consultaID =  JSON.parse(JSON.stringify(resultSino1));
                                  if(Object.keys(consultaID).length ===0){
                                    //console.log("NO SE ENCUENTRA EL NUMERO DE PROFESOR");   insertamos en el profesor usuario
                                    idSinodal1 = sino1[1][0]+sino1[1][1]+sino1[1][2]+sino1[1][3]+''+Math.floor(Math.random()*100+0);
                                    let sql_insert_profesorUsuario = `INSERT INTO profesorusuario(nombre, apellidoPaterno, apellidoMaterno, uid) VALUES ('${sino1[0]}', '${sino1[1]}', '${sino1[2]}', '${idSinodal1}')`;
                                    connection.query(sql_insert_profesorUsuario, (errorSino, resultSino)=>{
                                      if(errorSino){
                                        console.log("Error al crear el profesor usuario");
                                      }else{
                                        //como creamos al profesor, insertamos directamente en la tabla de sinodal protocolo
                                        let sql_insert_sinodal_protocolo1 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal1}')`;
                                          connection.query(
                                            sql_insert_sinodal_protocolo1,
                                            (errSinodal,resultSinodal) => {
                                              if (errSinodal) {
                                                console.log(
                                                  "error SINO 1,2 " +
                                                    errSinodal.message
                                                );
                                                errores = 1;
                                              }
                                            }
                                          );
                                        
                                      }
                                    });
                          
                                  }else{
                                    idSinodal1 = consultaID[0].uid;
                                    //console.log("ECONTRAMOS AL USUARIO", idSinodal1)
                                    //INSERTAMOS EN LA TABLA DE sinodal_protocolo
                                    let sql_insert_sinodal_protocolo1 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal1}')`;
                                    connection.query(
                                      sql_insert_sinodal_protocolo1,
                                      (
                                        errSinodal,
                                        resultSinodal
                                      ) => {
                                        if (errSinodal) {
                                          console.log(
                                            "error SINO 1,2 " +
                                              errSinodal.message
                                          );
                                          errores = 1;
                                        }
                                      }
                                    );
                                  }
                                  
                                  
                                }
                              });
                              //SEGUNDO SINODAL
                              let sql_select_profesorUsuario_sino2 = `SELECT uid FROM profesorusuario WHERE nombre = '${sino2[0]}' AND apellidoPaterno = '${sino2[1]}' AND apellidoMaterno = '${sino2[2]}'`;
                              connection.query(
                                  sql_select_profesorUsuario_sino2,
                                  (errorSPS2, resultSPS2) => {
                                  //no tenemos error
                                  if (!errorSPS2) {
                                      let idProfe = 0;
                                      idProfe = JSON.parse(JSON.stringify(resultSPS2));
                                      if (Object.keys(idProfe).length === 0) {
                                      //no encontramos nada, insertamos
                                      idSinodal2 = sino2[1][0]+sino2[1][1]+sino2[1][2]+sino2[1][3]+''+Math.floor(Math.random()*100+0);//clave
                                      let sql_insert_profesorUsuario_sinodal2 = `INSERT INTO profesorusuario(nombre, apellidoPaterno, apellidoMaterno, uid) VALUES ('${sino2[0]}', '${sino2[1]}', '${sino2[2]}', '${idSinodal2}')`;
                                      connection.query(sql_insert_profesorUsuario_sinodal2,(errSino2, resultSino2) => {
                                          if (errSino2) {
                                              console.log(errSino2.message);
                                              errores = 1;
                                          }else{
                                              //Como creamos al profesor, insertamos directamente en la tabla de sinodal protocolo
                                              let sql_insert_sinodal_protocolo2 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal2}')`;
                                              connection.query(
                                              sql_insert_sinodal_protocolo2,
                                              (
                                                  errSinodal,
                                                  resultSinodal
                                              ) => {
                                                  if (errSinodal) {
                                                  console.log(
                                                      errSinodal.message
                                                  );
                                                  errores = 1;
                                                  }
                                              }
                                              );
                                          }
                                          });
                                      } else {
                                      idSinodal2 = idProfe[0].uid;
                                      //INSERTAMOS EN LA TABLA DE sinodal_protocolo
                                      let sql_insert_sinodal_protocolo2 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal2}')`;
                                      connection.query(
                                          sql_insert_sinodal_protocolo2,
                                          (errSinodal, resultSinodal) => {
                                          if (errSinodal) {
                                              console.log(
                                              errSinodal.message
                                              );
                                              errores = 1;
                                          }
                                          }
                                      );
                                      }
                                  }
                                  }
                              );
                          
                              //TERCER SINODAL
                              let sql_select_profesorUsuario_sino3 = `SELECT uid FROM profesorusuario WHERE nombre = '${sino3[0]}' AND apellidoPaterno = '${sino3[1]}' AND apellidoMaterno = '${sino3[2]}'`;
                              connection.query(
                                  sql_select_profesorUsuario_sino3,
                                (errorSPS3, resultSPS3) => {
                                  //no tenemos error
                                  if (!errorSPS3) {
                                    let idProfe = 0;
                                    idProfe = JSON.parse(JSON.stringify(resultSPS3));
                                    if (Object.keys(idProfe).length === 0) {
                                      //no encontramos nada, insertamos
                                      idSinodal3 = sino3[1][0]+sino3[1][1]+sino3[1][2]+sino3[1][3]+''+Math.floor(Math.random()*100+0);
                                      let sql_insert_profesorUsuario_sinodal3 = `INSERT INTO profesorusuario (nombre, apellidoPaterno, apellidoMaterno, uid) VALUES ('${sino3[0]}', '${sino3[1]}', '${sino3[2]}', '${idSinodal3}')`;
                                      connection.query(sql_insert_profesorUsuario_sinodal3,(errSino3, resultSino3) => {
                                          if (errSino3) {
                                            console.log(errSino3.message);
                                            errores = 1;
                                          }else{
                                              //Como creamos al profesor, insertamos directamente en la tabla de sinodal protocolo
                                              let sql_insert_sinodal_protocolo3 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal3}')`;
                                              connection.query(sql_insert_sinodal_protocolo3, (errSinodal3, resultSinodal3)=>{
                                                  if(errSinodal3){
                                                      console.log(errSinodal3.message);
                                                      errores = 1;
                                                  }
                                              });
                                          }
                                      });
                                    
                                    } else {
                                      idSinodal3 = idProfe[0].uid;
                                      //INSERTAMOS EN LA TABLA DE sinodal_protocolo
                                      let sql_insert_sinodal_protocolo3 = `INSERT INTO sinodal_protocolo (fk_protocolo, fk_sinodal) VALUES (${idProto}, '${idSinodal3}')`;
                                      connection.query(
                                        sql_insert_sinodal_protocolo3,
                                        (errSinodal, resultSinodal) => {
                                          if (errSinodal) {
                                            console.log(
                                              errSinodal.message
                                            );
                                            errores = 1;
                                          }
                                        }
                                      );
                                    }
                                  }
                                }
                              );
                            }
                            //autores
                            if (longitud == 2) {
                              let sql_insert_autor2 = `INSERT INTO autorprotocolo(nombre, apellidoPaterno, apellidoMaterno, fk_protocolo) VALUES ('${autor2[0]}', '${autor2[1]}', '${autor2[2]}', ${idProto})`;
                              let sql_select_autor2 = `SELECT count(*) as registro FROM autorprotocolo Where (nombre  = '${autor2[0]}' AND apellidoPaterno = '${autor2[1]}' AND apellidoMaterno = '${autor2[2]}')`;
                              connection.query(sql_select_autor2, (errorSelectAutor2, resultSelectAutor2)=>{
                                if(!errorSelectAutor2){
                                  let registro = parseInt(resultSelectAutor2[0].registro);
                                  if(registro > 0){
                                    console.log(resultSelectAutor2);
                                    //cont = 1 + cont;
                                    errores = 1;
                                  }else{
                                    connection.query(
                                      sql_insert_autor2,
                                      (errorAutor2, resultAutor2) => {
                                        if (errorAutor2) {
                                          console.log(errorAutor2.message);
                                          errores = 1;
                                        }
                                      }
                                    );
                                  }
                                }
                              });
                            }
                            if (longitud == 3) {
                              let sql_select_autor3 = `SELECT count(*) as registro FROM autorprotocolo Where (nombre  = '${autor3[0]}' AND apellidoPaterno = '${autor3[1]}' AND apellidoMaterno = '${autor3[2]}')`;
                              let sql_insert_autor3 = `INSERT INTO autorprotocolo(nombre, apellidoPaterno, apellidoMaterno, fk_protocolo) VALUES ('${autor3[0]}', '${autor3[1]}', '${autor3[2]}', ${idProto})`;
                              let sql_select_autor2 = `SELECT count(*) as registro FROM autorprotocolo Where (nombre  = '${autor2[0]}' AND apellidoPaterno = '${autor2[1]}' AND apellidoMaterno = '${autor2[2]}')`;
                              let sql_insert_autor2 = `INSERT INTO autorprotocolo(nombre, apellidoPaterno, apellidoMaterno, fk_protocolo) VALUES ('${autor2[0]}', '${autor2[1]}', '${autor2[2]}', ${idProto})`;
                              let cont = 0;
                              connection.query(sql_select_autor2, (errorSelectAutor2, resultSelectAutor2)=>{
                                if(!errorSelectAutor2){
                                  let registro = parseInt(resultSelectAutor2[0].registro);
                                  if(registro > 0){
                                    console.log(resultSelectAutor2);
                                    //cont = 1 + cont;
                                    errores = 1;
                                  }else{
                                    connection.query(
                                      sql_insert_autor2,
                                      (errorAutor2, resultAutor2) => {
                                        if (errorAutor2) {
                                          console.log(errorAutor2.message);
                                          errores = 1;
                                        }
                                      }
                                    );
                                  }
                                }else{
                                  console.log(errorSelectAutor2);
                                }
                              });
                              connection.query(sql_select_autor3, (errorSelectAutor3, resultSelectAutor3)=>{
                                if(!errorSelectAutor3){
                                  let registro = parseInt(resultSelectAutor3[0].registro);
                                  if(registro > 0){
                                    //cont = 1 + cont;
                                    errores = 1;
                                  }else{
                                    connection.query(
                                      sql_insert_autor3,
                                      (errorAutor3, resultAutor3) => {
                                        if (errorAutor3) {
                                          console.log(errorAutor3.message);
                                          errores = 1;
                                        }
                                      }
                                    );
                                  }
                      
                                }
                              });
                            }
                            //Inserción en la tabla de version
                            let sql_insert_version_protocolo = `INSERT INTO version (fecha, fk_protocolo, enlace) VALUES ('${fechaActual}', ${idProto}, '${enlace}')`;
                            connection.query(sql_insert_version_protocolo, (errorInsertVersion, resultInsertVersion)=>{
                              if(errorInsertVersion){
                                console.log(errorInsertVersion.message);
                                errores = 1;
                              }else{
                                console.log("CREACIÓN CORRECTA - VERSION");
                              }
                            })
                            if (errores == 1) {
                              res.json({
                                status: "400",
                                message: "ERROR AL INSERTAR LOS DATOS",
                              });
                            } else {
                              res.json({
                                status: "200",
                                message: "Creación correcta",
                              });
                            }
                        }else{
                          console.log(errSelectProto.message);
                          res.json({status: "500", message : "Error al buscar el id del protocolo"})
                          errores = 1;
                        }
                      } );
                    }else{
                      console.log(errInsertProto.message);
                      res.json({status: "500", message:"Error al insertar el protocolo"});
                      errores = 1;
                    }
                  });
                }
              }
            });
          }
        }else{
          res.json({status:"500", message:"Error al buscar el usuario proporcionado"});
          errores = 1;
        }
        
      });
    

});


app.listen(3000, function () {
  console.log("runnin at 3000");
});

app.use(function (req, res) {
  res.status(404).send("Error");
});

