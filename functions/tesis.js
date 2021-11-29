async function obtenerTesis(consulta, promisePool) {
  const [ids, fields] = await promisePool.query(consulta);
  // console.log(ids);

  return await obtenerArregloDeTesis(promisePool, ids);
}

async function obtenerArregloDeTesis(promisePool, ids) {
  const tesisResultantes = [];
  var obtenerAutores;
  var obtenerSinodales;
  var obtenerDirectores;
  var obtenerPalabras;
  var obtenerTesis;
  await Promise.all(
    ids.map(async (id) => {
      console.log(id);
      obtenerAutores = `select a.fk_tesis as id,concat(a.nombre,' ',a.apellidoPaterno,' ',a.apellidoMaterno) as nombre from tesis t join autor a on t.id=a.fk_tesis where a.fk_tesis=${id.id};`;
      obtenerSinodales = `select d.fk_tesis as id, concat(p.nombre,' ',p.apellidoPaterno,' ',p.apellidoMaterno) as nombre from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where d.fk_tesis=${id.id};`;
      obtenerDirectores = `select d.fk_tesis as id, concat(p.nombre,' ',p.apellidoPaterno,' ',p.apellidoMaterno) as nombre from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where d.fk_tesis=${id.id};`;
      obtenerPalabras = `select p.fk_tesis as id, p.fk_palabra as palabra from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_tesis=${id.id};`;
      obtenerTesis = `select id,enlaceAPdf,titulo,carrera,grado,year1,resumen from tesis where id=${id.id};`;
      const [autoresFilas, fieldsa] = await promisePool.query(obtenerAutores);
      const [sinodalesFilas, fieldss] = await promisePool.query(
        obtenerSinodales
      );
      const [directoresFilas, fieldsd] = await promisePool.query(
        obtenerDirectores
      );
      const [palabrasFilas, fieldsp] = await promisePool.query(obtenerPalabras);
      const [tesisFila, fieldst] = await promisePool.query(obtenerTesis);
      let autores = [];
      let sinodales = [];
      let directores = [];
      let palabras = [];
      if (tesisFila.length > 0) {
        // console.log(autoresFilas);
        autoresFilas.forEach((autorFila) => {
          autores.push(autorFila.nombre);
        });

        // console.log(sinodalesFilas);
        sinodalesFilas.forEach((sinodalFila) => {
          sinodales.push(sinodalFila.nombre);
        });

        // console.log(directoresFilas);
        directoresFilas.forEach((directorFila) => {
          directores.push(directorFila.nombre);
        });

        // console.log(palabrasFilas);
        palabrasFilas.forEach((palabraFila) => {
          palabras.push(palabraFila.palabra);
        });

        // console.log(tesisFila);
        tesisResultantes.push({
          enlaceAPdf: tesisFila[0].enlaceAPdf,
          titulo: tesisFila[0].titulo,
          carrera: tesisFila[0].carrera,
          grado: tesisFila[0].grado,
          year: tesisFila[0].year1,
          resumen: tesisFila[0].resumen,
          autores: autores,
          sinodales: sinodales,
          directores: directores,
          palabrasClave: palabras,
        });
      }
    })
  );
  return tesisResultantes;
}

module.exports.obtenerTesis = obtenerTesis;
module.exports.obtenerArregloDeTesis=obtenerArregloDeTesis;

// ids.forEach( async (id) => {
//   obtenerAutores = `select a.fk_tesis as id,concat(a.nombre,' ',a.apellidoPaterno,' ',a.apellidoMaterno) as nombre from tesis t join autor a on t.id=a.fk_tesis where a.fk_tesis=${id.id};`;
//   obtenerSinodales = `select d.fk_tesis as id, concat(p.nombre,' ',p.apellidoPaterno,' ',p.apellidoMaterno) as nombre from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where d.fk_tesis=${id.id};`;
//   obtenerDirectores = `select d.fk_tesis as id, concat(p.nombre,' ',p.apellidoPaterno,' ',p.apellidoMaterno) as nombre from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where d.fk_tesis=${id.id};`;
//   obtenerPalabras = `select p.fk_tesis as id, p.fk_palabra as palabra from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_tesis=${id.id};`;
//   obtenerTesis = `select id,enlaceAPdf,titulo,carrera,grado,year1,resumen from tesis where id=${id.id};`;
//   const [autoresFilas, fieldsa] = await promisePool
//     .query(obtenerAutores)
//     .catch((err) => res.status(404).send("Servicio no disponible, intente de nuevo más tarde"));
//   const [sinodalesFilas, fieldss] = await promisePool
//     .query(obtenerSinodales)
//     .catch((err) => res.status(404).send("Servicio no disponible, intente de nuevo más tarde"));
//   const [directoresFilas, fieldsd] = await promisePool
//     .query(obtenerDirectores)
//     .catch((err) => res.status(404).send("Servicio no disponible, intente de nuevo más tarde"));
//   const [palabrasFilas, fieldsp] = await promisePool
//     .query(obtenerPalabras)
//     .catch((err) => res.status(404).send("Servicio no disponible, intente de nuevo más tarde"));
//   const [tesisFila, fieldst] = await promisePool
//     .query(obtenerTesis)
//     .catch((err) => res.status(404).send("Servicio no disponible, intente de nuevo más tarde"));

//   let autores = [];
//   let sinodales = [];
//   let directores = [];
//   let palabras = [];
//   if (tesisFila.length > 0) {
//     // console.log(autoresFilas);
//     autoresFilas.forEach((autorFila) => {
//       autores.push(autorFila.nombre);
//     });

//     // console.log(sinodalesFilas);
//     sinodalesFilas.forEach((sinodalFila) => {
//       autores.push(sinodalFila.nombre);
//     });

//     // console.log(directoresFilas);
//     directoresFilas.forEach((directorFila) => {
//       directores.push(directorFila.nombre);
//     });

//     // console.log(palabrasFilas);
//     palabrasFilas.forEach((palabraFila) => {
//       palabras.push(palabraFila.palabra);
//     });

//     // console.log(tesisFila);
//     tesisResultantes.push({
//       enlaceAPdf: tesisFila[0].enlaceAPdf,
//       titulo: tesisFila[0].titulo,
//       carrera: tesisFila[0].carrera,
//       grado: tesisFila[0].grado,
//       year: tesisFila[0].year1,
//       resumen: tesisFila[0].resumen,
//       autores: autores,
//       sinodales: sinodales,
//       directores: directores,
//       palabrasClave: palabras,
//     });
//   }
// });
