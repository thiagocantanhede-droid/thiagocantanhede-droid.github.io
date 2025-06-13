ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-47.562656, -24.281069, -44.849822, -22.914567]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Alvos_2 = new ol.format.GeoJSON();
var features_Alvos_2 = format_Alvos_2.readFeatures(json_Alvos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Alvos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alvos_2.addFeatures(features_Alvos_2);
var lyr_Alvos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alvos_2, 
                style: style_Alvos_2,
                popuplayertitle: 'Alvos',
                interactive: true,
    title: 'Alvos<br />\
    <img src="styles/legend/Alvos_2_0.png" /> 0<br />\
    <img src="styles/legend/Alvos_2_1.png" /> Entrega<br />\
    <img src="styles/legend/Alvos_2_2.png" /> Fiscalizacao<br />\
    <img src="styles/legend/Alvos_2_3.png" /> Vistoria<br />\
    <img src="styles/legend/Alvos_2_4.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_Alvos_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_Alvos_2];
lyr_Alvos_2.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'STATUS': 'STATUS', 'TIPO': 'TIPO', 'NOME': 'NOME', 'CPF/CNPJ': 'CPF/CNPJ', 'PROCESSO': 'PROCESSO', 'OBSERVAÇÕES': 'OBSERVAÇÕES', });
lyr_Alvos_2.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'STATUS': 'TextEdit', 'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'CPF/CNPJ': 'TextEdit', 'PROCESSO': 'TextEdit', 'OBSERVAÇÕES': 'TextEdit', });
lyr_Alvos_2.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'STATUS': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'NOME': 'inline label - visible with data', 'CPF/CNPJ': 'hidden field', 'PROCESSO': 'inline label - always visible', 'OBSERVAÇÕES': 'inline label - visible with data', });
lyr_Alvos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});