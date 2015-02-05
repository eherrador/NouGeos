var mapa;
var infowindow = null;
var features = null;
var otherfeatures = null;

$(document).ready(function ($) {
    "use strict";

    initMap();

    google.maps.event.addDomListener(window, 'load', initMap);

    startButtonEvents();
});

function initMap() {
    //Enabling new cartography and themes
    google.maps.visualRefresh = true;

    //Setting starting options of map
    var mapOptions = {
        //center: new google.maps.LatLng(39.9078, 32.8252),
        zoom: 11,
        //maxZoom: 17,
        //minZoom: 11,
        //draggable: false,
        //disableDefaultUI: false,
        //scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Getting map DOM element
    var mapElement = document.getElementById('mapDiv');

    //Creating a map with DOM element which is just obtained
    mapa = new google.maps.Map(mapElement, mapOptions);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
              var lat = position.coords.latitude;
              var lng = position.coords.longitude;
              //Creating LatLng object with latitude and
              //longitude.
              var devCenter = new google.maps.LatLng(lat, lng);
              mapa.setCenter(devCenter);
              //mapa.setZoom(11);
          });
    }

    // Load GeoJSON.
    /*var estado = $.getJSON("/GeoJSON/DFUrbAgeb.json");
    estado.then(function (data) {
        features = mapa.data.addGeoJson(data);
    });
    */

    // set up the style rules and events for google.maps.Data
    mapa.data.setStyle(styleFeature);

    mapa.data.addListener('click', clickOnGeoJSON);
    mapa.data.addListener('mouseover', mouseInToRegion);
    mapa.data.addListener('mouseout', mouseOutOfRegion);
}

function styleFeature(feature) {
    var outlineWeight = 0.5, zIndex = 1;
    if (feature.getProperty('state') === 'hover') {
        outlineWeight = zIndex = 2;
    }

    return {
        strokeWeight: outlineWeight,
        strokeColor: '#fff',
        zIndex: zIndex
    };
}

function clickOnGeoJSON(e) {
    content = '';
    e.feature.forEachProperty(function (value, key) {
        content += key + ': ' + value + '<br>';
    });
    if (infowindow != null)
        infowindow.close();
    infowindow = new google.maps.InfoWindow()
    infowindow.setContent(content);
    infowindow.setPosition(e.latLng);
    infowindow.setMap(mapa);
}

function mouseInToRegion(e) {
    // set the hover state so the setStyle function can change the border
    e.feature.setProperty('state', 'hover');
}

function mouseOutOfRegion(e) {
    // set the hover state so the setStyle function can change the border
    e.feature.setProperty('state', 'normal');
}

function startButtonEvents() {
    document.getElementById('menuMonterrey'
      ).addEventListener('click', function () {
          zoomToMonterrey();
      });
    
    document.getElementById('menuGuadalajara'
      ).addEventListener('click', function () {
          zoomToGuadalajara();
      });

    document.getElementById('menuCiudadMexico'
      ).addEventListener('click', function () {
          zoomToCiudadMexico();
      });

    document.getElementById('menuCuliacan'
      ).addEventListener('click', function () {
          zoomToCuliacan();
      });

    document.getElementById('menuHermosillo'
      ).addEventListener('click', function () {
          zoomToHermosillo();
      });

    document.getElementById('menuMazatlan'
      ).addEventListener('click', function () {
          zoomToMazatlan();
      });

    document.getElementById('menuAguascalientes'
      ).addEventListener('click', function () {
          zoomToAguascalientes();
      });

    document.getElementById('menuCelaya'
      ).addEventListener('click', function () {
          zoomToCelaya();
      });

    document.getElementById('menuQueretaro'
      ).addEventListener('click', function () {
          zoomToQueretaro();
      });

    document.getElementById('menuLeon'
      ).addEventListener('click', function () {
          zoomToLeon();
      });

    document.getElementById('menuSanLuisPotosi'
      ).addEventListener('click', function () {
          zoomToSanLuisPotosi();
      });

    document.getElementById('menuCuernavaca'
      ).addEventListener('click', function () {
          zoomToCuernavaca();
      });

    document.getElementById('menuTijuana'
      ).addEventListener('click', function () {
          zoomToTijuana();
      });

    document.getElementById('menuMexicali'
      ).addEventListener('click', function () {
          zoomToMexicali();
      });

    document.getElementById('menuEnsenada'
      ).addEventListener('click', function () {
          zoomToEnsenada();
      });
}

function zoomToMonterrey() {
    var monterrey = new google.maps.LatLng(25.660263, -100.296556);
    mapa.setCenter(monterrey);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/NLUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToGuadalajara() {
    var guadalajara = new google.maps.LatLng(20.677807, -103.343825);
    mapa.setCenter(guadalajara);
    mapa.setZoom(11);
    
    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }
    
    var estado = $.getJSON("/GeoJSON/JLUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToCiudadMexico() {
    var ciudadmexico = new google.maps.LatLng(19.432604, -99.132935);
    mapa.setCenter(ciudadmexico);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estadoDF = $.getJSON("/GeoJSON/DFUrbAgeb.txt");
    
    estadoDF.done(function (data1) {
        features = mapa.data.addGeoJson(data1);

        var estadoMX = $.getJSON("/GeoJSON/MEXUrbAgeb.txt");
        estadoMX.done(function (data) {
            otherfeatures = mapa.data.addGeoJson(data);
            setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
        });
    });   
}

function zoomToCuliacan() {
    var culiacan = new google.maps.LatLng(24.797933, -107.408148);
    mapa.setCenter(culiacan);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/SINUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToHermosillo() {
    var hermosillo = new google.maps.LatLng(29.081477, -110.962376);
    mapa.setCenter(hermosillo);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/SONUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToMazatlan() {
    var mazatlan = new google.maps.LatLng(23.252780, -106.412851);
    mapa.setCenter(mazatlan);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/SINUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToAguascalientes() {
    var aguascalientes = new google.maps.LatLng(21.889884, -102.291817);
    mapa.setCenter(aguascalientes);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/AGSUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToCelaya() {
    var celaya = new google.maps.LatLng(20.527456, -100.815476);
    mapa.setCenter(celaya);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }
    
    var estado = $.getJSON("/GeoJSON/GTOUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToQueretaro() {
    var queretaro = new google.maps.LatLng(20.604621, -100.403162);
    mapa.setCenter(queretaro);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/QROUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToLeon() {
    var leon = new google.maps.LatLng(21.124897, -101.672011);
    mapa.setCenter(leon);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/GTOUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToSanLuisPotosi() {
    var sanluispotosi = new google.maps.LatLng(22.154587, -100.972575);
    mapa.setCenter(sanluispotosi);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/SLPUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToCuernavaca() {
    var cuernavaca = new google.maps.LatLng(18.933813, -99.226891);
    mapa.setCenter(cuernavaca);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/MORUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToTijuana() {
    var tijuana = new google.maps.LatLng(32.498910, -116.952915);
    mapa.setCenter(tijuana);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/BCUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToMexicali() {
    var mexicali = new google.maps.LatLng(32.612183, -115.443600);
    mapa.setCenter(mexicali);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/BCUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

function zoomToEnsenada() {
    var ensenada = new google.maps.LatLng(31.833004, -116.597505);
    mapa.setCenter(ensenada);
    mapa.setZoom(11);

    if (otherfeatures != null) {
        for (var i = 0; i < otherfeatures.length; i++)
            mapa.data.remove(otherfeatures[i]);
    }

    if (features != null) {
        for (var i = 0; i < features.length; i++)
            mapa.data.remove(features[i]);
    }

    var estado = $.getJSON("/GeoJSON/BCUrbAgeb.txt");
    estado.done(function (data) {
        features = mapa.data.addGeoJson(data);
        setTimeout(function () { $("#ciudadesModal").modal("hide") }, 3000);
    });
}

(function () {
    "use strict";

    var pickButtonCategorias = $("#pickButtonCategorias");
    var pickButtonClientes = $("#pickButtonClientes");
    var pickButtonMetodologias = $("#pickButtonMetodologias");
    var pickButtonTipoLevantamientos = $("#pickButtonTipoLevantamientos");
    var pickButtonCiudades = $("#pickButtonCiudades");

    $("#groupMenuCategorias li a").on("click", function () {
        var categorias = $(this).text();
        pickButtonCategorias.text(categorias);
    });

    $("#groupMenuClientes li a").on("click", function () {
        var clientes = $(this).text();
        pickButtonClientes.text(clientes);
    });

    $("#groupMenuMetodologias li a").on("click", function () {
        var metodologias = $(this).text();
        pickButtonMetodologias.text(metodologias);
    });

    $("#groupMenuTipoLevantamientos li a").on("click", function () {
        var tiposlevantamiento = $(this).text();
        pickButtonTipoLevantamientos.text(tiposlevantamiento);
    });

    $("#groupMenuCiudades li a").on("click", function () {
        var ciudades = $(this).text();
        pickButtonCiudades.text(ciudades);
    });
})();