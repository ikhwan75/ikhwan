var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_INDONESIA_KEC_0 = new ol.format.GeoJSON();
var features_INDONESIA_KEC_0 = format_INDONESIA_KEC_0.readFeatures(json_INDONESIA_KEC_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDONESIA_KEC_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDONESIA_KEC_0.addFeatures(features_INDONESIA_KEC_0);var lyr_INDONESIA_KEC_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDONESIA_KEC_0, 
                style: style_INDONESIA_KEC_0,
    title: 'INDONESIA_KEC<br />\
    <img src="styles/legend/INDONESIA_KEC_0_0.png" /> Banjarharjo<br />\
    <img src="styles/legend/INDONESIA_KEC_0_1.png" /> Bantar Kawung<br />\
    <img src="styles/legend/INDONESIA_KEC_0_2.png" /> Brebes<br />\
    <img src="styles/legend/INDONESIA_KEC_0_3.png" /> Bulakamba<br />\
    <img src="styles/legend/INDONESIA_KEC_0_4.png" /> Bumiayu<br />\
    <img src="styles/legend/INDONESIA_KEC_0_5.png" /> Jatibarang<br />\
    <img src="styles/legend/INDONESIA_KEC_0_6.png" /> Kersana<br />\
    <img src="styles/legend/INDONESIA_KEC_0_7.png" /> Ketanggungan<br />\
    <img src="styles/legend/INDONESIA_KEC_0_8.png" /> Larangan<br />\
    <img src="styles/legend/INDONESIA_KEC_0_9.png" /> Losari<br />\
    <img src="styles/legend/INDONESIA_KEC_0_10.png" /> Paguyangan<br />\
    <img src="styles/legend/INDONESIA_KEC_0_11.png" /> Salem<br />\
    <img src="styles/legend/INDONESIA_KEC_0_12.png" /> Sirampog<br />\
    <img src="styles/legend/INDONESIA_KEC_0_13.png" /> Songgom<br />\
    <img src="styles/legend/INDONESIA_KEC_0_14.png" /> Tanjung<br />\
    <img src="styles/legend/INDONESIA_KEC_0_15.png" /> Tonjong<br />\
    <img src="styles/legend/INDONESIA_KEC_0_16.png" /> Wanasari<br />\
    <img src="styles/legend/INDONESIA_KEC_0_17.png" /> <br />'
        });

lyr_INDONESIA_KEC_0.setVisible(true);
var layersList = [baseLayer,lyr_INDONESIA_KEC_0];
lyr_INDONESIA_KEC_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Tahun': 'Tahun', 'Luas Panen': 'Luas Panen', 'Produksi': 'Produksi', 'Thn': 'Thn', 'Luas Pann': 'Luas Pann', 'Produksii': 'Produksii', });
lyr_INDONESIA_KEC_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Tahun': 'TextEdit', 'Luas Panen': 'TextEdit', 'Produksi': 'TextEdit', 'Thn': 'TextEdit', 'Luas Pann': 'TextEdit', 'Produksii': 'TextEdit', });
lyr_INDONESIA_KEC_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Tahun': 'inline label', 'Luas Panen': 'inline label', 'Produksi': 'inline label', 'Thn': 'inline label', 'Luas Pann': 'inline label', 'Produksii': 'inline label', });
lyr_INDONESIA_KEC_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});