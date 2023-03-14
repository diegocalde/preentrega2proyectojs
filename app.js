
const alumnos =[{dni:31180786,nombre :"julia",nota : 7,resultado:"aprobado"},
                {dni:32124789,nombre:"diego",nota :8,resultado:"aprobado"},
            {dni:33128657,nombre: "roberto", nota :5,resultado:"desaprobado"},
        {dni:34345678,nombre:"analia",nota :10,resultado:"aprobado"},
    {dni:35456703,nombre:"sergio",nota : 6,resultado:"desaprobado"}];

    const resultado1 = alumnos.filter(el => el.resultado.includes("aprobado"))
    const resultado2 = alumnos.filter(el => el.resultado.includes("desaprobado"))
    const dni = alumnos.map((el) => el.dni)
     
    
    let datos = prompt("ingrese que datos desea saber")
        if (datos=="aprobado" ) {
            console.log(resultado1)
        }else if (datos=="desaprobado") {
            console.log(resultado2)
        }else if (datos== "dni") {
           console.log(dni) 
        }else{
            alert("datos no disponibles")
        }
       
       //por consola se mostrara un array con los datos solitados
      
    
