const ventas = [ 
    {
    id: "casa1" ,
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    titulo: "Apartamento de Lujo en Zona Exclusiva",
    subtitulo: "Este apartamento de lujo esta ubicado em una exclusiva zona residencial.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    baños: "4 baños",
    precio: "5.000",
    smoke: false,
    pet: false
},
{
    id: "casa2",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    titulo: "Apartamento acogedor en la montaña",
    subtitulo: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    baños: "1 Baño" ,
    precio: "1.200",
    smoke: true,
    pet: true
},
{
    id: "casa3",
    src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    titulo: "Penthouse de lujo con terraza panoramica",
    subtitulo: "Este penthouse de lujo ofrece una terraza panoramica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    precio: "4.500",
    smoke: false,
    pet: true
},
{
    id: "casaC1",
    src:"https://estaticos-cdn.prensaiberica.es/clip/cebe9556-2261-46d4-8cc0-af70620485bb_16-9-discover-aspect-ratio_default_1167923.jpg",
    titulo: "Casa en las Afueras de la ciudad",
    subtitulo:"Este esta casa es ideal para tener la privacidad necesaria y evitar las aglomeraciones de la ciudad",
    ubicacion:"2311 de la Avenida de Los Robles Norte, Pasadena, California",
    habitaciones: "3 Habitaciones",
    baños: "2 Baños",
    precio: "3.800",
    smoke:true,
    pet: false
},]
let html=""
for(let casas of ventas){
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

    
    html+=`<div id="${casas.id}" class="propiedadEnVenta">
    <img src="${casas.src}">
    <h3>${casas.titulo}</h3>
    <h6>${casas.subtitulo}</h6>
    <p><i class="fas fa-map-marker-alt"></i>${casas.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${casas.habitaciones} | <i class="fas fa-bath"></i>  ${casas.baños}</p>
    <p><i class="fas fa-dollar-sign"></i>${casas.precio}</p>
    ${fumar}
    ${mascota}
    </div>`;
}


const propiedades = document.querySelector("#propiedadesEnVenta")
propiedades.innerHTML = html






// for (let venta of propiedades_venta){

//     let mostrarFumar = '';
//     let mostrarMascota = '';

//     if (venta.smoke)
//         mostrarFumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
//     else
//         mostrarFumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'

//     if (venta.pets)
//         mostrarMascota = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
//     else
//         mostrarMascota = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
      
//     ventaCard+=`
//     <div class="col-md-4 mb-4">
//     <div class="card">
//       <img src="${venta.src}" class="card-img-top" alt="Imagen del departamento"/>
//       <div class="card-body">
//         <h5 class="card-title">
//           ${venta.nombre}</h5>
//         <p class="card-text">
//           ${venta.descripcion}</p>
//         <p>
//           <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
//         <p>
//           <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
//           <i class="fas fa-bath"></i> ${venta.banoos} Baños
//         </p>
//         <p>
//           <i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
//           ${mostrarFumar}
//           ${mostrarMascota}
        
//       </div>
//     </div>
//   </div>
//   `
// }