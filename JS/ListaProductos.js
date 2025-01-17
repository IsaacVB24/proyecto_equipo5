const divDeportes =get("deportes");
const divMusica = get("musica");
const divAccesorios = get("accesorios");
const divTecnologia = get("tecnologia");
const divLineaBlanca = get("lineaBlanca");

const productos = 
[
    {
        'name': 'Balon Fútbol Americano',
        'img': "https://m.media-amazon.com/images/I/61b2hkrQarL.jpg",
        'descripcion': "Ovalado, con una longitud de 29cm y u un peso de 400gr. Cuatro paneles de cuero cocidos con hilo resistente ",
        'precio': 420,
        'stock': 3,
        'categoria': 'deportes'
    },
    
    {
        'name': '"Balón Fútbol Soccer',
        'img': "https://imgs.search.brave.com/uCNcTJBXmFYA5BsJPXeeaTW_Igs38LsOWgn9OuP_yMs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kZXBv/cnRlc2d1ZXJyYS5j/b20ubXgvY2RuL3No/b3AvZmlsZXMvU2lu/dGl0dWxvLTMtUmVj/dXBlcmFkby5qcGc_/dj0xNjg4MTUxNTgy/JndpZHRoPTQwMDA",
        'descripcion': "Diametro de 22cm. Peso de 450gr. Cubierto de peneles de cuero cosidos",
        'precio': 350,
        'stock': 10,
        'categoria': 'deportes'
    },
    {
        'name': 'Guitarra Acústica',
        'img': "https://imgs.search.brave.com/nnvbvP_BJ2j4zmfcSUx6aqvV-eYRLfrHdRhFfKhuL7M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJ0/aW5ndWl0YXJtZXhp/Y28uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAzLzAw/MC0xNVNNX2ZyZW50/ZS5qcGc",
        'descripcion': "Diapason clasico,Trastes 19, Acabado Natural, Mate, Negro y Vino, Aro, Fondo y Mastil Aile, Diapason y Puente Encino, Maquinaria Clasica, Cuerdas Nylon",
        'precio': 1250,
        'stock': 7,
        'categoria': 'musica'
    },
    {
        'name': 'Album Beatles sergeant pepper',
        'img': "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a",
        'descripcion': "Pepper's Lonely Hearts Club Band , álbum de estudio grabado por la banda de rock británica The Beatles, lanzado en 1967. El álbum resultó revolucionario por su tono psicodélico, sus efectos de estudio experimentales y su contribución musical al espíritu de la época contracultural de finales de los años 1960.",
        'precio': 564,
        'stock': 9,
        'categoria': 'musica'
    },
    {
        'name': 'Nintendo Switch 32GB',
        'img': "https://m.media-amazon.com/images/I/51Gz7IimgoL.AC_SL1024.jpg",
        'descripcion': "Nintendo Switch es la consola de Nintendo híbrida entre portátil y sobremesa. La Nintendo Switch incorpora dos controladores llamados Joy Con que se pueden desacoplar de la consola para juegos multijugador local como el Mario Kart, también tienen giroscopio, cámara infrarroja, NFC y vibración HD tecnologías que son aprovechadas por otros juegos, como 1,2,3 Switch, que acompañó a la consola en su lanzamiento.",
        'precio': 7864.25,
        'stock': 22,
        'categoria': 'tecnologia'
    },
    {
        'name': 'Google Chromecast 4k 4.ª generación 4K 8GB snow con 2GB de memoria RAM',
        'img': "https://http2.mlstatic.com/D_NQ_NP_2X_635602-MLA74782529607_022024-F.webp",
        'descripcion': "Chromecast con Google TV te ofrece el entretenimiento que amas, en hasta 4K HDR.Obtén recomendaciones personales de tus suscripciones, todo en un solo lugar. No tendrás que saltar entre aplicaciones para decidir qué mirar. Mira contenido de Netflix, Amazon Prime Video, Disney+, YouTube, la aplicación Apple TV, Peacock, HBO Max y muchos más.",
        'precio': 1197,
        'stock': 10,
        'categoria': 'tecnologia'
    },
    {
        'name': 'LICUADORA TAURUS VITRA 10 VEL VIDRIO POTENTE Taurus VITRA10',
        'img': "https://i5.walmartimages.com/asr/0efb65c8-6988-492a-b662-02fb170310ec.1b5e5523d3a8b18f324967ae248f1ac6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        'descripcion': "Vaso de Vidrio, Libre de BPA de 1,5 litros 500 Watts de potencia 10 Velocidades (6 continuas y 4 pulsos) Tapa de cierre hermético con tapón dosificador Sistema de acople Easy Fitel desgaste de la licuadora FÃCIL DE LAVAR. Sus cuchillas de acero inoxidable son desmontables y el vaso es apto para lavavajillas COMPATIBLE. Se puede utilizar con su jarra o con tarros, botellas para llevar y otros accesorios compatibles",
        'precio': 579,
        'stock': 6,
        'categoria': 'lineaBlanca'
    },
    {
        'name': 'Freidora de aire T-Fal Más de 4 Porciones 8 L Negro',
        'img': "https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00001094222890l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        'descripcion': "Estas innovadoras freidoras sin aceite te permiten disfrutar de tus alimentos favoritos de manera más saludable. Ya sea que necesites una freidora eléctrica o una freidora de aire grande, tenemos la opción perfecta para ti. Con una freidora de papas o una freidora de papas fritas, obtendrás resultados crujientes y deliciosos sin el exceso de grasa.",
        'precio': 3199,
        'stock': 17,
        'categoria': 'lineaBlanca'
    },
    {'name': 'Pulsera plata',
        'img': "https://http2.mlstatic.com/D_NQ_NP_634860-MLU74276578390_022024-O.webp",
        'descripcion': "Pulsera para hombre de estilo clásico con eslabones de diseño 3 cortos y 1 largo. Ancho: 4.7 mm. Largo: 20 cm. Broche tipo perico para mayor seguridad. Metal: Plata Ley .925 con certificación #216 CRPT. Diseño de doble vista, con una cara diamantada y otra lisa para dos estilos en uno.",
        'precio': 527,
        'stock': 134,
        'categoria': 'accesorios'
    },
    {'name': 'collar concha',
            'img': "https://http2.mlstatic.com/D_NQ_NP_651771-MLM54804064417_042023-O.webp",
            'descripcion': "Collar Choker de conchitas de mar elaborado con material de alta calidad.",
            'precio': 100,
            'stock': 44,
            'categoria': 'accesorios'
    }
];

function mostrarCards (){
    console.log(typeof localStorage.getItem('productos'));
    JSON.parse(localStorage.getItem('productos')).forEach((producto, index) => {
        const card = `
        <div class="musica">
            <div class="card mb-3" id="${producto.categoria}_${index}" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.name}</h5>
                            <p class="card-text">Descripción: ${producto.descripcion}</p>
                            <p class="card-text">Precio: $${producto.precio} MXN</p>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-outline-secondary btn-sm" onclick="decrementarCantidad('input_${producto.categoria}_${index}')">-</button>
                                <input type="number" id="input_${producto.categoria}_${index}" value="1" min="1" class="form-control mx-2 text-center" style="width: 60px;">
                                <button class="btn btn-outline-secondary btn-sm" onclick="incrementarCantidad('input_${producto.categoria}_${index}')">+</button>
                            </div>
                            
                            <button class="btn btn-success mt-3" onclick="agregarAlCarrito()">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        get(producto.categoria).insertAdjacentHTML("beforeend", card);
    });
}

function incrementarCantidad(idInput) {
    get(idInput).value++;
}
function decrementarCantidad(idInput) {
    if(get(idInput).value > 1) get(idInput).value--;
}

if(!localStorage.getItem('productos')) localStorage.setItem('productos', JSON.stringify(productos));

mostrarCards();