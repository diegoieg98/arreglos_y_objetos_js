const propiedadesEnAlquiler = [
    {
        id: "casaC2",
        src:"https://miaminmobiliario.com/wp-content/uploads/2020/12/pasos-para-comprar-una-casa-de-lujo.jpg",
        titulo: "Casa Lujosa con piscina",
        subtitulo: "Esta casa de lujo ofrece una piscina y terraza panoramica con vistas espectaculares",
        ubicacion: " 742 de Evergreen Terrace, Springfield",
        habitaciones: "5 Habitaciones",
        baños: "3 Baños",
        precio: "5.500",
        smoke: true,
        pet: false
    },
    {
        id: "casa4",
        src:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        titulo: "Apartamento en el centro de la ciudad",
        subtitulo:"Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion:"123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones",
        baños: "2 Baños",
        precio: "2.000",
        smoke:false,
        pet: true
    },
    {
        id: "casa5",
        src:"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        titulo:"Apartamento luminoso con vista al mar",
        subtitulo:"Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion:"456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones:"3 habitaciones",
        baños:"3 Baños",
        precio:"2.500",
        smoke:true,
        pet: true
    },
    {
        id:"casa6",
        src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        titulo:"Condominio moderno en zona residencial",
        subtitulo:"Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion:"123 Main Street, Anytown, CA 91234",
        habitaciones:"2 Habitaciones",
        baños:"2 Baños",
        precio:"2.200",
        smoke:false,
        pet:false
    }
]

let html= ""
    for(let casas of propiedadesEnAlquiler){
        let fumar = "" ;
        let mascota = "";
    
    if(casas.smoke){
        fumar = `<p class="yes"><i class="fas fa-smoking"></i> Se puede Fumar</p>`;
    }else{
        fumar = `<p class="no"><i class="fas fa-smoking-ban"></i> No se puede Fumar</p>`
    }
    if(casas.pet){
        mascota = `<p class="yes"><i class="fas fa-paw"></i> Se puede tener Mascotas</p>`
    }else{
        mascota = `<p class="no"><i class="fas fa-ban"></i> No se puede tener mascota </p>`
    }

        html+=`<div id="${casas.id}" class="propiedadesEnAlquiler">
        <img src="${casas.src}">
        <h3>${casas.titulo}</h3>
        <h6>${casas.subtitulo}</h6>
        <p><i class="fas fa-map-marker-alt"></i> ${casas.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${casas.habitaciones} | <i class="fas fa-bath"></i> ${casas.baños}</p>
        <p><i class="fas fa-dollar-sign"></i> ${casas.precio}</p>
        ${fumar}
        ${mascota}
        </div>`;
    }

    const Alquiler = document.querySelector("#propiedadesEnAlquiler")
    Alquiler.innerHTML = html

