const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
//const env = require("./functions/envvar");
const tesisFunctions = require("./functions/tesis");
const consultas = require("./functions/consultas2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',//env.password(),
  database: "proyectotesis",
  charset: "utf8mb4_spanish_ci",
});

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: '',//env.password(),
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
  let autor1,autor2,autor3,director1,director2,sino1,sino2,sino3,i,palabras;
  //Aqui almacenamos los id de los autores,
  let idUsuario, idAutor, idTesis;
  let idDirector1, idDirector2, idSinodal1, idSinodal2, idSinodal3;
  //año actual
  let fecha = new Date();
  let fechaActual =
    fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
  //console.log("DENTRO");
  //console.log(req.body);
  /*ALMACENAMOS LA INFORMACIÓN*/
  const { numeroT,titulo,autores,directores,sinodales,enlace,palabrasClave,year,carrera,grado,resumen} = req.body;
  //console.log("titulo: "+titulo+"\n");
  //De esta manera no erramos para la inserción de los datos para la base de datos
  //AUTORES O INTEGRANTES
  autor1 = autores[0].split(",");
  autor2 = autores[1].split(",");
  autor3 = autores[2].split(",");
  //DIRECTORES DE TESIS
  director1 = directores[0].split(",");
  director2 = directores[1].split(",");
  //SINODALES DE TESIS
  sino1 = sinodales[0].split(",");
  sino2 = sinodales[1].split(",");
  sino3 = sinodales[2].split(",");
  //console.log(autor1, autor2, autor3, director1, director2, sino1, sino2, sino3, enlace, palabrasClave, year, carrera, grado, resumen);
  //script de inserción de autor
  //INSERT INTO AUTOR (nombre, apellidoPaterno, apellidoMaterno) VALUES (autor2[0], autor2[1], autor2[2]);
  //EL PRIMERO SE DEBE DE INGRESAR EN LA TABLA DE ESTUDIANTE y hacer un select del id del usuario
  //INSERT INTO estudiante(nombre, apellidoPaterno, apellidoMaterno)VALUES(autor1[0], autor1[1], autor1[2])

  connection.connect(function (err) {
    if (!err) {
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
                //console.log("RESULT DENTRO DELA FUNCIÓN: ", idUsuario);
                let sql_insert_tesis = `INSERT INTO tesis(fechaDeRegistro, enlaceAPdf, titulo, carrera, grado, year1, resumen, fk_estudiante) VALUES ('${fechaActual.toString()}', '${enlace.toString()}', '${titulo.toString()}', '${carrera.toString()}', '${grado.toString()}', ${year}, '${resumen.toString()}', 72)`;
                //console.log(sql_insert_tesis);
                connection.query(sql_insert_tesis, (err, resultTesis) => {
                  if (!err) {
                    //console.log("Insertamos la tesis:\n" + sql_insert_tesis + "\n");
                    //se realizo la inserción de forma correcta, ahora obtenemos el numero de id
                    let sql_select_tesis = `SELECT id FROM tesis Where titulo = '${titulo}'`;
                    connection.query(sql_select_tesis, (err, resultIDt) => {
                      if (!err) {
                        //console.log("Encontramos el ID de la tesis");
                        //almacenamos el valor del id de la tesis
                        let datoConsultaIt = JSON.parse(
                          JSON.stringify(resultIDt)
                        );
                        idTesis = parseInt(datoConsultaIt[0].id);
                        //AQUI REALIZAMOS LA INSERCIÓN DE LAS PALABRAS CLAVE, INDEPENDIENTES DE LA ID TESIS
                        palabras = palabrasClave.split(",");
                        for (i = 0; i < palabras.length; i++) {
                          let sql_insert_palabrasClave = `INSERT INTO palabraclave VALUES ('${palabras[i]}')`;
                          connection.query(
                            sql_insert_palabrasClave,
                            (errPC, resultPCNid) => {
                              if (errPC) {
                                console.log(errPC.message);
                                res.json({status:"500", message : "Error al insertar las palabras clave"});
                              }
                              //console.log("INSERTAMOS LAS PALABRAS CLAVE");
                            }
                          );
                        } //termina la iteración de la inserción de las palabras clave
                        //AHORA PODEMOS HACER LA INSERCIÓN DE LAS PALABRAS CLAVE REFERENTE EN LA TESIS
                        for (i = 0; i < palabras.length; i++) {
                          let sql_insert_palabrasClave_tesis = `INSERT INTO palabras_tesis(fk_tesis, fk_palabra) VALUES ('${idTesis}', '${palabras[i]}')`;
                          connection.query(
                            sql_insert_palabrasClave_tesis,
                            (errorPCTesis, rsultPCSid) => {
                              if (errorPCTesis) {
                                console.log(errorPCTesis.message);
                                res.json({status:"500", message : "Error al insertar las palabras clabe de la tesis"});
                              }
                            }
                          );
                        } //fin de la iteración de la inserción de las palabras clave en la tabla de la tesis
                        //INSERCIÓN DE LOS PROFESORES
                        if (director1[0] != "") {
                          //console.log("ESTA LLENO EL 1");
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
                        
                                if (Object.keys(idProfe).length === 0) {
                                  //no encontramos nada, insertamos
                                  let sql_insert_profesor_director1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director1[0]}', '${director1[1]}', '${director1[2]}')`;
                                  connection.query(
                                    sql_insert_profesor_director1,
                                    (errDir1, resultDir1) => {
                                      if (errDir1) {
                                        console.log("aqu 1 "+errDir1.message);
                                        res.json({status:"500", message : "Error al insertar al profesor"});
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
                                        let val = parseInt(idBusqueda[0].id);
                                        idDirector1 = val;
                                        let sql_insert_directores_tesis1 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector1})`;
                                        connection.query(
                                          sql_insert_directores_tesis1,
                                          (errInsertDir, resultDir) => {
                                            if (errInsertDir) {
                                              console.log("aqui 2"+errInsertDir.message);
                                              res.json({status:"500", message : "Error al insertar al director de tesis"});
                                            }
                                          }
                                        );
                                      } else {
                                        console.log("aqui 3"+errBid.message);
                                        res.json({status:"500", message : "Error al buscar el id del profesor"});
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
                                        console.log("aqui director 1"+errInsertDir.message);
                                        //res.json({status:"500", message : "Error al insertar al director a la tesis"});
                                      }
                                    }
                                  );
                                }
                              } else {
                                console.log(errorSP1.message);
                                res.json({status:"500", message : "Error al buscar el id del profesor"});
                              }
                            }
                          );
                        }
                        if (director2[0] != "") {
                          //console.log("ESTA LLENO EL 2");
                          let sql_select_profesor_director2 = `SELECT id FROM profesor WHERE nombre = '${director2[0]}' AND apellidoPaterno = '${director2[1]}' AND apellidoMaterno = '${director2[2]}'`;
                          //console.log(sql_select_profesor_director2)
                          connection.query(
                            sql_select_profesor_director2,
                            (errorSP2, resultSP2) => {
                              //no tenemos error
                              if (!errorSP2) {
                                //console.log(resultSP2)
                                let idProfe = JSON.parse(JSON.stringify(resultSP2));
                                if (Object.keys(idProfe).length === 0) {
                                  //no encontramos nada, insertamos
                                  let sql_insert_profesor_director2 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${director2[0]}', '${director2[1]}', '${director2[2]}')`;
                                  connection.query(
                                    sql_insert_profesor_director2,
                                    (errDir2, resultDir2) => {
                                      if (errDir2) {
                                        console.log(errDir2.message);
                                        res.json({status:"500", message:"Error al insertar al director 2"});
                                      }
                                    }
                                  );
                                  let sql_select_profesor_director2_creado = `SELECT id FROM profesor WHERE nombre = '${director2[0]}' AND apellidoPaterno = '${director2[1]}' AND apellidoMaterno = '${director2[2]}'`;
                                  connection.query(
                                    sql_select_profesor_director2_creado,
                                    (errBID, resultBID) => {
                                      if (!errBID) {
                                        let idBusqueda = JSON.parse(JSON.stringify(resultBID));
                                        let val = parseInt(idBusqueda[0].id);
                                        idDirector2 = val;
                                        //console.log(idDirector2);
                                        let sql_insert_directores_tesis2 = `INSERT INTO director_tesis (fk_tesis, fk_director) VALUES (${idTesis}, ${idDirector2})`;
                                        //console.log(sql_insert_directores_tesis2);
                                        connection.query(
                                          sql_insert_directores_tesis2,
                                          (errInsertDir, resultDir) => {
                                            if (errInsertDir) {
                                              console.log(errInsertDir.message);
                                              res.json({status:"500", message:"Error al insertar al director 2 a la tabla de tesis"});
                                            }
                                          }
                                        );
                                      } else {
                                        console.log(errBID.message);
                                        res.json({status:"500", message:"Error al buscar el id del director 2"});
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
                                        console.log(errInsertDir.message);
                                        res.json({status:"500", message:"Error al insertar el director 2 de tesis"});
                                      }
                                    }
                                  );
                                }
                              } else {
                                console.log(errorSP2.message);
                                res.json({status:"500", message : "Error al buscar el id del profesor"});
                              }
                            }
                          );
                          
                          //console.log(sql_insert_profesor_director2);
                        }
                        if (sino1[0] != "") {
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
                                if (Object.keys(idProfe).length === 0) {
                                  //no encontramos nada, insertamos
                                  let sql_insert_profesor_sinodal1 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino1[0]}', '${sino1[1]}', '${sino1[2]}')`;
                                  connection.query(
                                    sql_insert_profesor_sinodal1,
                                    (errSino1, resultSino1) => {
                                      if (errSino1) {
                                        console.log(errSino1.message);
                                        res.json({status:"500", message : "Error al insertar al sinodal"});
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
                                        let val = parseInt(idBusqueda[0].id);
                                        idSinodal1 = val;
                                        let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                        connection.query(
                                          sql_insert_sinodal_tesis1,
                                          (errSinodal, resultSinodal) => {
                                            if (errSinodal) {
                                              console.log(errSinodal.message);
                                              res.json({status:"500", message : "Error al insertar al sinodal de tesis"});
                                            }
                                          }
                                        );
                                      }else{
                                        console.log(errBID.message);              
                                        res.json({status:"500", message : "Error al buscar el id del profesor"});
                                      }
                                    }
                                  );
                                } else {
                                  let val = parseInt(idProfe[0].id);
                                  //idSinodal.push(parseInt(idProfe[0].id));
                                  //console.log(val);
                                  idSinodal1 = val;
                                  let sql_insert_sinodal_tesis1 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal1})`;
                                  connection.query(
                                    sql_insert_sinodal_tesis1,
                                    (errSinodal, resultSinodal) => {
                                      if (errSinodal) {
                                        console.log(errSinodal.message);
                                        res.json({status:"500", message : "Error al insertar al sinodal 3 a la tesis"});
                                      }
                                    }
                                  );
                                }
                              }else{
                                console.log(errorSPS1.message);
                                res.json({status:"500", message : "Error al buscar el id del profesor"});
                              }
                            }
                          );
                          //console.log(sql_insert_profesor_sinodal1);
                        }
                        if (sino2[0] != "") {
                          //console.log("ESTA LLENO EL 2");
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
                                if (Object.keys(idProfe).length === 0) {
                                  //no encontramos nada, insertamos
                                  let sql_insert_profesor_sinodal2 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino2[0]}', '${sino2[1]}', '${sino2[2]}')`;
                                  connection.query(
                                    sql_insert_profesor_sinodal2,
                                    (errSino2, resultSino2) => {
                                      if (errSino2) {
                                        console.log(errSino2.message);
                                        res.json({status:"500", message : "Error al insertar al sinodal"});
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
                                        let val = parseInt(idBusqueda[0].id);
                                        idSinodal2 = val;
                                        let sql_insert_sinodal_tesis2 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal2})`;
                                        connection.query(
                                          sql_insert_sinodal_tesis2,
                                          (errSinodal, resultSinodal) => {
                                            if (errSinodal) {
                                              console.log(errSinodal.message);
                                              res.json({status:"500", message : "Error al insertar al sinodal de tesis"});
                                            }
                                          }
                                        );
                                      }else{
                                        console.log(errBID.message);
                                        res.json({status:"500", message : "Error al buscar el id del profesor"});
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
                                        console.log(errSinodal.message);
                                        res.json({status:"500", message : "Error al insertar al sinodal 2 a la tesis"});
                                      }
                                    }
                                  );
                                }
                              }else{
                                console.log(errorSPS2.message);
                                res.json({status:"500", message : "Error al buscar el id del profesor"});
                              }
                            }
                          );
                          //console.log(sql_insert_profesor_sinodal2);
                        }
                        if (sino3[0] != "") {
                          //console.log("ESTA LLENO EL 3");
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
                                if (Object.keys(idProfe).length === 0) {
                                  //no encontramos nada, insertamos
                                  let sql_insert_profesor_sinodal3 = `INSERT INTO PROFESOR(nombre, apellidoPaterno, apellidoMaterno) VALUES ('${sino3[0]}', '${sino3[1]}', '${sino3[2]}')`;
                                  connection.query(
                                    sql_insert_profesor_sinodal3,
                                    (errSino3, resultSino3) => {
                                      if (errSino3) {
                                        console.log(errSino3.message);
                                        res.json({status:"500", message : "Error al insertar al sinodal"});
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
                                        let val = parseInt(idBusqueda[0].id);
                                        idSinodal3 = val;
                                        let sql_insert_sinodal_tesis3 = `INSERT INTO sinodal_tesis (fk_tesis, fk_sinodal) VALUES (${idTesis}, ${idSinodal3})`;
                                        connection.query(
                                          sql_insert_sinodal_tesis3,
                                          (errSinodal, resultSinodal) => {
                                            if (errSinodal) {
                                              console.log(errSinodal.message);
                                              res.json({status:"500", message : "Error al insertar al sinodal de tesis"});
                                            }
                                          }
                                        );
                                      }else{
                                        console.log(errBID.message);
                                        res.json({status:"500", message : "Error al buscar el id del profesor"});
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
                                        console.log(errSinodal.message);
                                        res.json({status:"500", message : "Error al insertar al sinodal 3 a la tesis"});
                                      }
                                    }
                                  );
                                }
                              }else{
                                console.log(errorSPS3.message);
                                res.json({status:"500", message : "Error al buscar el id del profesor"});
                              }
                            }
                          );
                          //console.log(sql_insert_profesor_sinodal3);
                        }
                        //INSERCION DE LOS AUTORES
                        if (autor2[0] != "") {
                          let sql_insert_autor2 = `INSERT INTO AUTOR(nombre, apellidoPaterno, apellidoMaterno, fk_tesis) VALUES ('${autor2[0]}', '${autor2[1]}', '${autor2[2]}', ${idTesis})`;
                          connection.query(
                            sql_insert_autor2,
                            (errorAutor2, resultAutor2) => {
                              if (errorAutor2) {
                                console.log(errorAutor2.message);
                                res.json({
                                  status: "500",
                                  message: "Error de inserción de autor 2",
                                });
                              }
                            }
                          );
                        }
                        if (autor3[0] != "") {
                          let sql_insert_autor3 = `INSERT INTO AUTOR(nombre, apellidoPaterno, apellidoMaterno, fk_tesis) VALUES ('${autor3[0]}', '${autor3[1]}', '${autor3[2]}', ${idTesis})`;
                          connection.query(
                            sql_insert_autor3,
                            (errorAutor3, resultAutor3) => {
                              if (errorAutor3) {
                                console.log(errorAutor3.message);
                                res.json({
                                  status: "500",
                                  message: "Error de inserción de autor 3",
                                });
                              }
                            }
                          );
                        }
                        res.json({
                          status: "200",
                          message: "TESIS CREADA CON EXITO",
                        });
                        
                      } else {
                        console.log(err.message);
                        res.json({status:"500", message : "Error al buscar el id de la tesis"});
                      }
                    });
                  } else {
                    console.log(err.message);
                    res.json({status:"500", message : "Error al insertar la tesis"});
                  }
                });
              }
            } else {
              console.log(err.message);
              res.json({
                status: "500",
                message: "Error al buscar el usuario proporcionado 1",
              });
            }
          });
        } else {
          res.json({
            status: "500",
            message: "Error al tener conexión con la base de datos",
          });
        }
      });
    } else {
      res.json({
        status: "500",
        message: "Error al tener conexión con la base de datos",
      });
    }
  });
  idUsuario=0, idAutor=0, idTesis=0;
  idDirector1=0, idDirector2=0, idSinodal1=0, idSinodal2=0, idSinodal3=0;
});

app.listen(3000, function () {
  console.log("runnin at 3000");
});

app.use(function (req, res) {
  res.status(404).send("Error");
});
