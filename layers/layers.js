var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_departamento_sencico_1 = new ol.format.GeoJSON();
var features_departamento_sencico_1 = format_departamento_sencico_1.readFeatures(json_departamento_sencico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departamento_sencico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamento_sencico_1.addFeatures(features_departamento_sencico_1);
var lyr_departamento_sencico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departamento_sencico_1, 
                style: style_departamento_sencico_1,
                popuplayertitle: 'departamento_sencico',
                interactive: true,
    title: 'departamento_sencico<br />\
    <img src="styles/legend/departamento_sencico_1_0.png" /> Amazonas<br />\
    <img src="styles/legend/departamento_sencico_1_1.png" /> Ancash<br />\
    <img src="styles/legend/departamento_sencico_1_2.png" /> Apurimac<br />\
    <img src="styles/legend/departamento_sencico_1_3.png" /> Arequipa<br />\
    <img src="styles/legend/departamento_sencico_1_4.png" /> Ayacucho<br />\
    <img src="styles/legend/departamento_sencico_1_5.png" /> Cajamarca<br />\
    <img src="styles/legend/departamento_sencico_1_6.png" /> Cusco<br />\
    <img src="styles/legend/departamento_sencico_1_7.png" /> Huancavelica<br />\
    <img src="styles/legend/departamento_sencico_1_8.png" /> Huanuco<br />\
    <img src="styles/legend/departamento_sencico_1_9.png" /> Ica<br />\
    <img src="styles/legend/departamento_sencico_1_10.png" /> Junin<br />\
    <img src="styles/legend/departamento_sencico_1_11.png" /> La Libertad<br />\
    <img src="styles/legend/departamento_sencico_1_12.png" /> Lago TitiCaca<br />\
    <img src="styles/legend/departamento_sencico_1_13.png" /> Lambayeque<br />\
    <img src="styles/legend/departamento_sencico_1_14.png" /> Lima<br />\
    <img src="styles/legend/departamento_sencico_1_15.png" /> Loreto<br />\
    <img src="styles/legend/departamento_sencico_1_16.png" /> Madre de Dios<br />\
    <img src="styles/legend/departamento_sencico_1_17.png" /> Moquegua<br />\
    <img src="styles/legend/departamento_sencico_1_18.png" /> Pasco<br />\
    <img src="styles/legend/departamento_sencico_1_19.png" /> Piura<br />\
    <img src="styles/legend/departamento_sencico_1_20.png" /> Provincia Constitucional del Callao<br />\
    <img src="styles/legend/departamento_sencico_1_21.png" /> Puno<br />\
    <img src="styles/legend/departamento_sencico_1_22.png" /> San Martin<br />\
    <img src="styles/legend/departamento_sencico_1_23.png" /> Tacna<br />\
    <img src="styles/legend/departamento_sencico_1_24.png" /> Tumbes<br />\
    <img src="styles/legend/departamento_sencico_1_25.png" /> Ucayali<br />\
    <img src="styles/legend/departamento_sencico_1_26.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_departamento_sencico_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_departamento_sencico_1];
lyr_departamento_sencico_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'Lista': 'Lista', });
lyr_departamento_sencico_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'Lista': 'TextEdit', });
lyr_departamento_sencico_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'Lista': 'no label', });
lyr_departamento_sencico_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});