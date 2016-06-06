$(document).ready(function(){

	var map1 = L.map("map1", {
        center: [28.209589, 83.985585],
        zoom: 15
    });

    var map2 = L.map("map2", {
        center: [28.209589, 83.985585],
        zoom: 15
    });

    /*var selectorContainer = $('<div class="month-selector"/>').appendTo('body');
    selectorContainer.append('<a class="jan" layerID="jan">January</a>');
    selectorContainer.append('<a class="feb" layerID="jan">February</a>');
    selectorContainer.append('<a class="mar" layerID="jan">March</a>');
    selectorContainer.append('<a class="apr" layerID="jan">April</a>');
    selectorContainer.append('<a class="may" layerID="jan">May</a>');
    selectorContainer.append('<a class="jun" layerID="jan">June</a>');
	
	$(selectorContainer).find('a').on('click', function(e){
		$("#map").find('.leaflet-tile-container').addClass('hidden');
		$("#map").find(('.leaflet-tile-container.'+$(this).attr('layerID'))).removeClass('hidden');
	});*/

	//L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



	L.tileLayer('http://192.241.246.48/jan/{z}/{x}/{y}.png').addTo(map1);
	L.tileLayer('http://192.241.246.48/jun/{z}/{x}/{y}.png').addTo(map2);

	


});