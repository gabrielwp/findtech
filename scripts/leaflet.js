var marker;

export function instanceMap() {
  setTimeout(() => {
    var map = L.map('map').setView([-22.85791, -47.06905], 11);
    L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=uFwY12qU0yp6yzbxxrzo', {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
      crossOrigin: true
    }).addTo(map);

    var meta1nJson = [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.0480755,
            -22.8120690,
          ]
        },
        "properties": {
          "id": 1,
          "title": "CI&T",
          "address": "CI&T Software. Condomínio GlobalTech, Estrada Giuseppina Vianelli di Napolli, 1185 - Polo II de Alta Tecnologia, Campinas - SP, 13086-530",
          "url": "https://ciandt.com/br/pt-br",
          "image": "https://upload.wikimedia.org/wikipedia/pt/8/88/CI%26T.png",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.04791,
            -22.81155,
          ]
        },
        "properties": {
          "id": 2,
          "title": "Venturus",
          "address": "Venturus Inovação & Tecnologia. Condomínio GlobalTech, Estrada Giuseppina Vianelli di Napolli, 1185 - Polo II de Alta Tecnologia, Campinas - SP, 13086-530",
          "url": "https://www.venturus.org.br/",
          "image": "https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/venturus-1544703795-vnt-mainpng.png",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.04524,
            -22.81319,
          ]
        },
        "properties": {
          "id": 3,
          "title": "Dextra",
          "address": "Dextra Digital. Polis II de Alta Tecnologia - R. Dr. Ricardo Benetton Martins, 1000 - Prédio 11 - Bosque das Palmeiras, Campinas - SP, 13086-902",
          "url": "https://dextra.com.br/",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjabs7F8DL6Cj-AM2dn9oTOwhExrjW5fqhA&usqp=CAU",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.04809,
            -22.89936,
          ]
        },
        "properties": {
          "id": 4,
          "title": "ArtIT",
          "address": "ArtIT Intelligent Technology. Av. José de Souza Campos, 753 - Cambuí, Campinas - SP, 13025-320",
          "url": "https://artit.com.br/",
          "image": "https://artit.com.br/wp-content/uploads/2018/10/logo-art.jpg",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.20142,
            -22.89949,
          ]
        },
        "properties": {
          "id": 5,
          "title": "IBM",
          "address": "IBM International Business Machines Corporation. Rodovia Jornalista Francisco Aguirre Proença SP101, Km 09 - S/N - Chácaras Assay, SP, 13186-900",
          "url": "https://www.ibm.com/br-pt",
          "image": "https://img.ibxk.com.br/2014/10/21/21092325642047.jpg?w=1120&h=420&mode=crop&scale=both",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.06659,
            -22.89627,
          ]
        },
        "properties": {
          "id": 6,
          "title": "Ícaro Tech",
          "address": "Ícaro Technologies. Ed. Glicério Office Building, Av. Francisco Glicério, 2331 - Botafogo, Campinas - SP, 13023-101",
          "url": "https://www.icarotech.com/",
          "image": "https://www.puc-campinas.edu.br/wp-content/uploads/2019/07/icaro.png",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.05101,
            -22.85467,
          ]
        },
        "properties": {
          "id": 7,
          "title": "iFood",
          "address": "iFood: Delivery de Comida e Mercado. R. Jasmim, 660 - Mansões Santo Antônio, Campinas - SP, 13087-460",
          "url": "https://www.ifood.com.br/",
          "image": "https://i.pinimg.com/originals/93/e7/cf/93e7cfa87b6f3d834872e9a044ee925f.png",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.11277,
            -22.89603,
          ]
        },
        "properties": {
          "id": 8,
          "title": "Bosch",
          "address": "Robert Bosch GmbH. Rodovia Anhanguera, km 98 13065-900, Campinas - SP, 13065-082",
          "url": "https://www.bosch.com.br/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bosch-Logo.svg/1280px-Bosch-Logo.svg.png",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.15129,
            -22.85331,
          ]
        },
        "properties": {
          "id": 9,
          "title": "AT&T",
          "address": "AT&T Global Network Services Brasil. Alexander Grahn Bell, 301 - Techno Park, Campinas - SP, 13069-330",
          "url": "https://www.corp.att.com/worldwide/att-you-brazil/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/800px-AT%26T_logo_2016.svg.png",
          "isFavorited": false
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -47.18542,
            -22.91067,
          ]
        },
        "properties": {
          "id": 10,
          "title": "Dell",
          "address": "Dell, Inc. Av. da Emancipação, 5000 - Parque dos Pinheiros, Hortolândia - SP, 13184-654",
          "url": "https://www.dell.com/pt-br",
          "image": "https://www.bringit.com.br/blog/wp-content/uploads/2015/03/dell-logo.jpg",
          "isFavorited": false
        }
      },
    ]

    const geoJson = new L.GeoJSON(meta1nJson, {
      onEachFeature: onEachFeature
    }).addTo(map);

    function onEachFeature(feature, layer) {
      if (feature.properties.title && feature.properties.address) {
        layer.bindPopup(`
        <img alt="${feature.properties.title}" style="max-width: 70px; margin: 0 10px 5px 0; float: left" src="${feature.properties.image}">
          <div><b><a href="${feature.properties.url}">${feature.properties.title}</a></b><br>
          <p style="margin: 0; line-height: 12px">${feature.properties.address}<p></div>
          `);

        layer.on('click', onClick);
      }
    }

    var controlSearch = new L.Control.Search({
      propertyName: 'address',
      initial: false,
      autoCollapse: true,
      zoom: 15,
      position: 'topleft',
      layer: geoJson,
    });

    map.addControl(controlSearch);

    fillFavoritedMarkers(geoJson);


  });
}

export function favoriteMarker() {
  if (marker) {
    marker.feature.properties.isFavorited = !marker.feature.properties.isFavorited;

    var markerId = marker.feature.properties.id;
    var isFavorited = marker.feature.properties.isFavorited;


    var storagedMarkers = JSON.parse(localStorage.getItem('favoritedMarkers')) || [];
    var findMarker = storagedMarkers.findIndex((storagedMarker => storagedMarker.id == markerId));

    if (findMarker != -1) {
      storagedMarkers[findMarker].isFavorited = isFavorited;
    } else {
      var newMarker = { id: markerId, isFavorited: isFavorited };
      storagedMarkers.push(newMarker);
    }

    localStorage.setItem('favoritedMarkers', JSON.stringify(storagedMarkers));
  }
}

function onClick(e) {
  setTimeout(() => {
    marker = e.target;
    var favoriteButton = document.getElementById('favorite');

    marker.feature.properties.isFavorited ? favoriteButton.innerText = "Desfavoritar" :
      favoriteButton.innerText = "Favoritar";

    setIcon(marker, 'green');
    marker.getPopup().on('remove', onRemove)
  }, 15);
}

function onRemove() {
  setTimeout(() => {
    var color = 'blue';

    if (marker.feature.properties.isFavorited) {
      color = 'violet';
    }

    setIcon(marker, color)
  }, 5);

  setTimeout(() => {
    marker = null;
  }, 10);
}

function fillFavoritedMarkers(geoJson) {
  var storagedMarkers = JSON.parse(localStorage.getItem('favoritedMarkers')) || [];

  geoJson.eachLayer(function (layer) {
    var findMarker = storagedMarkers.findIndex((storagedMarker => storagedMarker.id == layer.feature.properties.id));

    if (findMarker != -1) {
      layer.feature.properties.isFavorited = storagedMarkers[findMarker].isFavorited;

      if (layer.feature.properties.isFavorited) {
        setIcon(layer, 'violet')
      }
    }
  });
}

function setIcon(layer, color) {
  const iconUrl = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`;

  const icon = new L.Icon({
    iconUrl: iconUrl,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  layer.setIcon(icon);
}