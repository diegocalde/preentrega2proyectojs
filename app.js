
const alumnos =[{id: 1,nombre :"julia",nota : 7,resultado:"aprobado"},
                {id:2,nombre:"diego",nota :8,resultado:"aprobado"},
            {id:3,nombre: "roberto", nota :5,resultado:"desaprobado"},
        {id:4,nombre:"analia",nota :10,resultado:"aprobado"},
    {id:5,nombre:"sergio",nota : 6,resultado:"desaprobado"}];

    const resultado1 = alumnos.filter(el => el.resultado.includes("aprobado"))
    const resultado2 = alumnos.filter(el => el.resultado.includes("desaprobado"))
    const id = alumnos.map((el) => el.id)
    // ingresar un console.log solicitando el date requerido del array alumnos
    console.log(resultado1);
    console.log(resultado2);
    console.log(id);
    
