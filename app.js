

const alumnos = [
    { dni: 31180786, nombre: "julia", nota: 7, resultado: "aprobado" },
    { dni: 32124789, nombre: "diego", nota: 8, resultado: "aprobado" },
    { dni: 33128657, nombre: "roberto", nota: 5, resultado: "desaprobado" },
    { dni: 34345678, nombre: "analia", nota: 10, resultado: "aprobado" },
    { dni: 35456703, nombre: "sergio", nota: 6, resultado: "desaprobado" },
  ];
  
  // sin vincula arrays alumnos a una tabla en html
  function tablaNotas() {
    let table = document.getElementById("tableAlumnos");
  
    for (var i = 0; i < alumnos.length; i++) {
      var row = table.insertRow(i + 1);
  
      let dniCell = row.insertCell(0);
      let nombreCell = row.insertCell(1);
      let notaCell = row.insertCell(2);
      let resultadoCell = row.insertCell(3);
  
      dniCell.innerHTML = alumnos[i].dni;
      nombreCell.innerHTML = alumnos[i].nombre;
      notaCell.innerHTML = alumnos[i].nota;
      resultadoCell.innerHTML = alumnos[i].resultado;
    }
  }
  
  // 
  window.onload = function() {
    tablaNotas();
  };
  function notaAlumno(alumno) {
   let nota = prompt("ingrese la  nota" + ":");
   nota = parseFloat(nota)
   if(nota >=5){
    alert(alumno.nombre +"aprobaste con una nota de "+"="+nota );
   }else{
    alert(alumno.nombre + "desaprobaste con una nota"+"=" +nota);
   }
    }
  
// se llama a la funcion notaAlumno para cada alumno hasta que finalice el listado de nombres
for (let i = 0; i < alumnos.length; i++) {
    notaAlumno(alumnos[i]);
  }
// nota : hasta no finalizar el arreglo no deja ver la tabla vinculada por js a html
// arranca con un prompt 
