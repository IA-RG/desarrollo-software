function obtenerConsulta(
  autor,
  carrera,
  directores,
  grado,
  palabrasClave,
  resumen,
  sinodales,
  titulo,
  year,
  consulta
) {
  if (
    autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%';`;
  } else if (
    !autor &&
    carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%';`;
  } else if (
    !autor &&
    !carrera &&
    directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    !autor &&
    !carrera &&
    !directores &&
    grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    year
  ) {
    return `select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    sinodales &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    !autor &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    sinodales &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    directores &&
    sinodales &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    grado &&
    sinodales &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    grado &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    sinodales &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    sinodales &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    titulo &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    sinodales &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    titulo &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    sinodales &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    titulo &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    sinodales &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    sinodales &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    !autor &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    !autor &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    sinodales &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    titulo &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    !autor &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    sinodales &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    titulo &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    !autor &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    sinodales &&
    !autor &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    sinodales &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    !autor &&
    !carrera &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    sinodales &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    titulo &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    !autor &&
    !carrera &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    sinodales &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    !autor &&
    !carrera &&
    !directores &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    sinodales &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    sinodales &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    titulo &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    year &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    sinodales &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    titulo &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    year &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    sinodales &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    titulo &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    year &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    sinodales &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    titulo &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    sinodales &&
    titulo &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    sinodales &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    titulo &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    !carrera &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    !carrera &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    sinodales &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    titulo &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    year &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    !carrera &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    sinodales &&
    !carrera &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    titulo &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    year &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    sinodales &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    titulo &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    sinodales &&
    titulo &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    sinodales &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    titulo &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    !carrera &&
    !directores &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    sinodales &&
    !carrera &&
    !directores &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    titulo &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    year &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    sinodales &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    titulo &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !carrera &&
    !directores &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    !autor &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    !autor &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    sinodales &&
    !autor &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    titulo &&
    !autor &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    year &&
    !autor &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    !autor &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    !autor &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    titulo &&
    !autor &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    year &&
    !autor &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    titulo &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    sinodales &&
    titulo &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    sinodales &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    titulo &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    !autor &&
    !directores &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    !autor &&
    !directores &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    titulo &&
    !autor &&
    !directores &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    year &&
    !autor &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    titulo &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !directores &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    !autor &&
    !carrera &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    !autor &&
    !carrera &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    !autor &&
    !carrera &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    year &&
    !autor &&
    !carrera &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !directores &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    !palabrasClave &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    sinodales &&
    !palabrasClave &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    titulo &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    year &&
    !palabrasClave &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    !grado &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    !grado &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    titulo &&
    !grado &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    year &&
    !grado &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    !grado &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    titulo &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    year &&
    !grado &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    sinodales &&
    titulo &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    sinodales &&
    year &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    titulo &&
    year &&
    !grado &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    !directores &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    !directores &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    titulo &&
    !directores &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    year &&
    !directores &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    !directores &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    titulo &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    year &&
    !directores &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    sinodales &&
    titulo &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    sinodales &&
    year &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    titulo &&
    year &&
    !directores &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !directores &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    titulo &&
    !directores &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    year &&
    !directores &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !directores &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    sinodales &&
    year &&
    !directores &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    titulo &&
    year &&
    !directores &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    sinodales &&
    titulo &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    sinodales &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    titulo &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    sinodales &&
    titulo &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    !carrera &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    !carrera &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    !carrera &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    year &&
    !carrera &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    !carrera &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    titulo &&
    !carrera &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    year &&
    !carrera &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    sinodales &&
    titulo &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    sinodales &&
    year &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    titulo &&
    year &&
    !carrera &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !carrera &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    !carrera &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    year &&
    !carrera &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !carrera &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    sinodales &&
    year &&
    !carrera &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    titulo &&
    year &&
    !carrera &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !carrera &&
    !directores &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !carrera &&
    !directores &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !carrera &&
    !directores &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    !autor &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    !autor &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    !autor &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    year &&
    !autor &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    !autor &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    titulo &&
    !autor &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    year &&
    !autor &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    sinodales &&
    titulo &&
    !autor &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    sinodales &&
    year &&
    !autor &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    titulo &&
    year &&
    !autor &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !directores &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !directores &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !directores &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !carrera &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !carrera &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !carrera &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !directores &&
    !year
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores &&
    !grado
  ) {
    return `select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    !sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    !resumen &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    !resumen &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    year &&
    !resumen &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    !palabrasClave &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    titulo &&
    !palabrasClave &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    year &&
    !palabrasClave &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    sinodales &&
    titulo &&
    !palabrasClave &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    sinodales &&
    year &&
    !palabrasClave &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    titulo &&
    year &&
    !palabrasClave &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !grado &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    !grado &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    year &&
    !grado &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !grado &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    year &&
    !grado &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    titulo &&
    year &&
    !grado &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    !grado &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    year &&
    !grado &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    titulo &&
    year &&
    !grado &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    sinodales &&
    titulo &&
    year &&
    !grado &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !directores &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !directores &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !directores &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !directores &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !directores &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !directores &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !directores &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    year &&
    !directores &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    titulo &&
    year &&
    !directores &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    sinodales &&
    titulo &&
    year &&
    !directores &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !directores &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !directores &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !directores &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !directores &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !directores &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !carrera &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !carrera &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !carrera &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !carrera &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !carrera &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !carrera &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !directores &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !directores &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores &&
    !grado
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !autor &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !autor &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !autor &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !autor &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !autor &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !autor &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !directores &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !directores &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores &&
    !grado
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !carrera &&
    !year
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !carrera &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !grado
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera &&
    !directores
  ) {
    return `select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    !titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    !sinodales &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    year &&
    !sinodales &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    !resumen &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    year &&
    !resumen &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    titulo &&
    year &&
    !resumen &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    !palabrasClave &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    year &&
    !palabrasClave &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    titulo &&
    year &&
    !palabrasClave &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    sinodales &&
    titulo &&
    year &&
    !palabrasClave &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !grado &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !grado &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !grado &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !grado &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !grado &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !directores &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !directores &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !directores &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !directores &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !directores &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !directores &&
    !grado
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !carrera &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !carrera &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !carrera &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !grado
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera &&
    !directores
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !autor &&
    !year
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !autor &&
    !titulo
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !autor &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !resumen
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !grado
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !directores
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor &&
    !carrera
  ) {
    return `select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    !year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    year &&
    !titulo
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    titulo &&
    year &&
    !sinodales
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    sinodales &&
    titulo &&
    year &&
    !resumen
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !palabrasClave
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !grado
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !directores
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !carrera
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year &&
    !autor
  ) {
    return `select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  } else if (
    autor &&
    carrera &&
    directores &&
    grado &&
    palabrasClave &&
    resumen &&
    sinodales &&
    titulo &&
    year
  ) {
    return `select distinct t.id from tesis t join autor a on t.id=a.fk_tesis join autor a2 on a2.fk_tesis=t.id where a.nombre like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' or a.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where carrera like '%${consulta}%' union select distinct t.id from tesis t join director_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_director where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where grado like '%${consulta}%' union select distinct t.id from tesis t join palabras_tesis p on t.id=p.fk_tesis where p.fk_palabra like '%${consulta}%' union select distinct t.id from tesis t where resumen like '%${consulta}%' union select distinct t.id from tesis t join sinodal_tesis d on t.id=d.fk_tesis join profesor p on p.id=d.fk_sinodal where p.nombre like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' or p.apellidoMaterno like '%${consulta}%' union select distinct t.id from tesis t where titulo like '%${consulta}%' union select distinct t.id from tesis t where year1 like '%${consulta}%';`;
  }
}

module.exports = { obtenerConsulta };
