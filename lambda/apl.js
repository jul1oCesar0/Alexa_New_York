const datasource = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://dam.ngenespanol.com/wp-content/uploads/2021/05/cuanto-cuesta-viajar-a-nueva-york.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenido a la skill de Nueva York! "
                }
            },
            "logoUrl": "",
            "hintText": ""
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const descripcionsource = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "",
            "displayFullscreen": true,
            "headerTitle": "Descripcion",
            "headerSubtitle": "",
            "logoUrl": "",
            "videoControlType": "jump10",
            "videoSources": [
                "https://pktzflimqmdciuzdonva.supabase.co/storage/v1/object/public/videos/videoplayback.mp4?t=2024-07-03T04%3A04%3A54.091Z"
            ],
            "sliderType": "determinate"
        }
    }
};

const descripcioncreateDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};






const datasourcelugares = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdCzfbvjeiq2l7XUJjRchdZSz-Zqr1t5D5A&s",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Lugares turisticos",
        "listItems": [
            {
                "primaryText": "Estatua de libertad",
                "imageSource": "https://th.bing.com/th/id/R.1a6af9a5349df75408afc7c58c68f424?rik=vW1D4g1min8wKg&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "Time Square",
                "imageSource": "https://th.bing.com/th/id/OIP.UJ8HNAcrKyiaSv636SsfngHaE9?rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "Empire State Building",
                "imageSource": "https://th.bing.com/th/id/OIP.UpoFOroglxK3Wb1PSJ2IhwHaLH?w=768&h=1152&rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "Central Park",
                "imageSource": "https://a.cdn-hotels.com/gdcs/staging126/d1145/8842c813-c6de-496a-9caa-fbb97a6a936a.jpg"
            },
            {
                "primaryText": "Museo Metropolitano de Arte (Met)",
                "imageSource": "https://www.historyhit.com/app/uploads/2020/11/shutterstock_1080692804-1.jpg"
            },
            {
                "primaryText": "Brooklyn Bridge",
                "imageSource": "https://img.fotocommunity.com/brooklyn-bridge-b2e7474b-74b1-4852-b7f1-3a1a42a5d3e8.jpg?height=1080"
            }
        ],
        "logoUrl": ""
    }
};

const createDirectivePayloadlugares = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasourcecomida = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://media.istockphoto.com/id/1463371608/es/foto/mesa-de-cocina-con-utensilios-y-espacio-de-copia-en-la-pared.webp?b=1&s=170667a&w=0&k=20&c=Smwj_I3GLxwY7_ppvXfdNutquW8WUue0_0P-YuFOozI=",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "",
            "primaryText": "COMIDA TIPICA",
            "listItems": [
                {
                    "primaryText": "Bagel con ",
                    "secondaryText": "cream cheese",
                    "thumbnailImage": "https://i.redd.it/lxbglujoyoo71.jpg"
                },
                {
                    "primaryText": "Tarta de queso ",
                    "secondaryText": "New York Cheesecake",
                    "thumbnailImage": "https://th.bing.com/th/id/R.6ecbd192ad20717035bc23e66663dd4b?rik=qORS62jcUWR4wg&pid=ImgRaw&r=0"
                },
                {
                    "primaryText": "Pizza al estilo ",
                    "secondaryText": "Neoyorquino",
                    "thumbnailImage": "https://th.bing.com/th/id/R.37c972eb2b4235f19bb22e36377eb25e?rik=Y6UrcBlSXkqbsg&pid=ImgRaw&r=0"
                },
                {
                    "primaryText": "Bacon, egg and",
                    "secondaryText": "cheese",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.pjyQcNwGJKmhnQoHSWcmDQHaE7?rs=1&pid=ImgDetMain"
                },
                {
                    "primaryText": "Pretzels ",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.PLjSVA84ZWvqixV6vfkrUgHaD4?rs=1&pid=ImgDetMain"
                }
            ]
        }
    }
};

const createDirectivePayloadcomida = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasourcetrajes = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-leaf-2.png",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "",
            "primaryText": "TRAJES TIPICOS",
            "listItems": [
                {
                    "primaryText": "Estilo ",
                    "secondaryText": "cowboy",
                    "thumbnailImage": "https://media.gq.com.mx/photos/62b62104b2839a90b71f86e5/master/pass/estilo-western-sombrero.jpg"
                },
                {
                    "primaryText": "Estilo ",
                    "secondaryText": "Flapper",
                    "thumbnailImage": "https://billiken.lat/wp-content/uploads/2022/05/SITIOflappers_1.jpg"
                },
                {
                    "primaryText": "Estilo ",
                    "secondaryText": "Pin-up",
                    "thumbnailImage": "https://blog.batistehair.es/wp-content/uploads/2021/02/ideas-peinados-pin-up.jpg"
                },
                {
                    "primaryText": "warbonnets",
                    "thumbnailImage": "https://i.ebayimg.com/images/g/GkAAAOSwoB9lSISb/s-l1200.webp"
                }
            ]
        }
    }
};

const createDirectivePayloadtrajess = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};




const datasourcepersonaje = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Personajes sobresalientes",
        "listItems": [
            {
                "primaryText": "walt whitman",
                "imageSource": "https://th.bing.com/th/id/R.ddc8d2d9b031ac804e019bee5aa476c5?rik=1Nx%2ff1YbcDRhQg&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "Henry James",
                "imageSource": "https://th.bing.com/th/id/OIP.ghMUDb2rLsmXPqbMVvS-EAAAAA?rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "Robert De Niro",
                "imageSource": "https://th.bing.com/th/id/R.5f4c96c7440add30e3b84834fe97dd59?rik=779%2b%2bHGdaBCW4g&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fc%2fc0%2fRobert_De_Niro_KVIFF_portrait.jpg&ehk=paZbFWBR0rLdlaCJ3lsXanM%2b25RvVObzNwOILsipDU8%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "Al Pacino",
                "imageSource": "https://assets.vogue.com/photos/5891a635b482c0ea0e4d9b49/master/w_2560%2Cc_limit/holding-al-pacino-best-and-worst-film-moments.jpg"
            },
            {
                "primaryText": "Sojourner Truth",
                "imageSource": "https://th.bing.com/th/id/R.e540bc301fbac22b941ab8b035a80828?rik=wVQ2kv3xUe0mtQ&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "Bella Abzug",
                "imageSource": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bella-abzug-bettye-lane.jpg"
            }
        ],
        "logoUrl": "",
        "hintText": "puedes decir: \"Alexa, cuales son los trajes tipicos de new york\""
    }
};

const createDirectivePayloadpersonaje = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasourceayuda = {
    "textListData": {
        "type": "object",
        "objectId": "textListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/textlist/AlexaTextListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Ayuda",
        "listItems": [
            {
                "primaryText": "cual es la descripcion de esta ciudad"
            },
            {
                "primaryText": "dame la descripcion de esta ciudad"
            },
            {
                "primaryText": "dame lugares turisticos para visitar"
            },
            {
                "primaryText": "lugares turisticos"
            },
            {
                "primaryText": "dime lugares turisticos de new york"
            },
            {
                "primaryText": "dame las comidas mas tipicas"
            },
            {
                "primaryText": "las comidas mas conocidas de new york"
            },
            {
                "primaryText": "dime las comidas tipicas"
            },
            {
                "primaryText": "me dices los trajes tipicos de new york"
            },
            {
                "primaryText": "trajes tipicos de new york"
            },
            {
                "primaryText": "personajes sobresalientes de new york"
            },
            {
                "primaryText": "los personajes sobresalientes de esa ciudad"
            }
        ],
        "logoUrl": ""
    }
};

const createDirectivePayloadayuda = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasourcecancelar = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-cityscape-of-new-york-at-sunset-image_2908750.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "¡Gracias por usar New York! ¡Espero verte pronto!"
                }
            },
            "logoUrl": "",
            "hintText": ""
        }
    }
};

const createDirectivePayloadcancelar = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasourceerror = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://plus.unsplash.com/premium_photo-1667637089198-4c699979b5bf?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvbmRvJTIwZGUlMjBwYW50YWxsYSUyMGRlJTIwbnVldmElMjB5b3JrfGVufDB8fDB8fHww",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "https://w0.peakpx.com/wallpaper/728/468/HD-wallpaper-error-icio-thumbnail.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "hintText": "Prueba diciendo: \"Alexa, ayuda\"",
            "headerAttributionImage": "",
            "primaryText": "Lo siento, ha ocurrido un problema en la pronunciacion. Por favor, inténtalo de nuevo más tarde.",
            "textAlignment": "center",
            "titleText": "Error"
        }
    }
};

const createDirectivePayloaderror = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasourcemusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://pktzflimqmdciuzdonva.supabase.co/storage/v1/object/public/videos/_te_imaginas_escuchar_esto_mientras_caminas_por_las_calles_de_nueva_york.mp4",
                "https://pktzflimqmdciuzdonva.supabase.co/storage/v1/object/public/videos/_te_imaginas_escuchar_esto_mientras_caminas_por_las_calles_de_nueva_york.mp4"
            ],
            "backgroundImage": "https://c0.wallpaperflare.com/preview/479/650/468/times-square-blade-runner-new-york-night-time.jpg",
            "coverImageSource": "https://media0.giphy.com/media/XHKwwYoyYGk7LlewCm/giphy.gif?cid=790b7611kl01koqwl160iqt2lvhd52u6sudpbecjygdn43zn&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "headerTitle": "Musica",
            "logoUrl": "",
            "primaryText": "JAY-Z - Empire State Of Mind ft. Alicia Keys",
            "secondaryText": "",
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayloadmusica = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};





module.exports = { datasource, createDirectivePayload,descripcionsource,descripcioncreateDirectivePayload, datasourcelugares, createDirectivePayloadlugares,datasourcecomida, createDirectivePayloadcomida, datasourcetrajes, createDirectivePayloadtrajess,datasourcepersonaje, createDirectivePayloadpersonaje,datasourceayuda, createDirectivePayloadayuda, datasourcecancelar, createDirectivePayloadcancelar, datasourceerror, createDirectivePayloaderror,datasourcemusica,createDirectivePayloadmusica};