const actividadUI = document.querySelector('#actividad')

const descripcionUI = document.querySelector('#descripcion')

const botonEnviarUI = document.querySelector('#enviar')

const sectionMostrar = document.querySelector('#mostrar')

const botonActualizarUI = document.querySelector('#actualizar')

 

let referencia = ''

botonEnviarUI.addEventListener('click', addToDo)

botonActualizarUI.addEventListener('click', editar2)

//se ejecuta al abrir la app
document.addEventListener('DOMContentLoaded',mantener)
 
function addToDo(event){

    event.preventDefault()

    let datos = JSON.parse(localStorage.getItem('elements'))

 

 

    if(datos == null){

 

        datos = []

 

    }

 

 

 

    const objetoTemporal={

 

        actividad: actividadUI.value,

 

        descripcion: descripcionUI.value

 

    }

 

 

 

    datos.push(objetoTemporal)

 

 

 

    localStorage.setItem('elements', JSON.stringify(datos))

 

   

 

    imprimir()

 

}

 

 

 

function imprimir(){

 

    let datos = JSON.parse(localStorage.getItem('elements'))

 

 

 

    sectionMostrar.innerHTML = datos.map((dato, index) =>{

 

        return /*HTML*/`

 

        <div class='card'>

 

            <h3>${dato.actividad}</h3>

 

            <h3>${dato.descripcion}</h3>

 

            <button onClick="editar(${index})">editar</button>
            <button onClick="eliminar(${index})">eliminar</button>
 

        </div>

 

        `

 

    }).join('<hr />')

 

}

 

 

 

function editar(index){

 

   

 

    let datos = JSON.parse(localStorage.getItem('elements'))

 

   

 

    actividadUI.value = datos[index].actividad

 

    descripcionUI.value = datos[index].descripcion

 

 

 

    botonActualizarUI.style.display = "block"

 

    botonEnviarUI.style.display = "none"

 

 

 

    referencia = index

 

}

 

 

 

function editar2(event){

 

    event.preventDefault()

 

 

 

    let datos = JSON.parse(localStorage.getItem('elements'))

 

 

 

    const objetoTemporal={

 

        actividad: actividadUI.value,

 

        descripcion: descripcionUI.value

 

    }

   

    datos.splice(referencia, 1, objetoTemporal)

 

    localStorage.setItem('elements', JSON.stringify(datos))

 

    imprimir(datos)

 

    descripcionUI.value = ""

    actividadUI.value = ""

 

    botonActualizarUI.style.display = "none"

    botonEnviarUI.style.display = "block"

 

}

function eliminar(index){
    const array = localStorage.getItem('elements')
    
    
        const items=JSON.parse(array)
        items.splice(index,1)
    
    localStorage.setItem('elements',JSON.stringify(items))
    imprimir(items)
}

function mantener(){
    const datos = JSON.parse(localStorage.getItem('elements'))
    if(datos){
        imprimir(datos)
    }
}