$(function () { new GMaps({ el: "#gmap_basic_example", lat: -12.043333, lng: -77.028333 }); var a = new GMaps({ div: "#gmap_markers", lat: -12.043333, lng: -77.028333 }); a.addMarker({ lat: -12.043333, lng: -77.03, title: "Lima", details: { database_id: 42, author: "HPNeo" }, click: function (a) { console.log && console.log(a), alert("You clicked in this marker") } }), a.addMarker({ lat: -12.042, lng: -77.028333, title: "Marker with InfoWindow", infoWindow: { content: "<p>HTML Content</p>" } }); var t = GMaps.staticMapURL({ size: [$("#gmap_static_map").width(), 400], lat: -12.043333, lng: -77.028333 }); $("<img/>").attr("src", t).appendTo("#gmap_static_map"); var l = GMaps.staticMapURL({ size: [$("#gmap_static_map_with_markers").width(), 400], lat: -12.043333, lng: -77.028333, markers: [{ lat: -12.043333, lng: -77.028333 }, { lat: -12.045333, lng: -77.034, size: "small" }, { lat: -12.045633, lng: -77.022, color: "blue" }] }); $("<img/>").attr("src", l).appendTo("#gmap_static_map_with_markers"); var i = GMaps.staticMapURL({ size: [$("#gmap_static_map_polyline").width(), 400], lat: -12.043333, lng: -77.028333, polyline: { path: [[-12.040397656836609, -77.03373871559225], [-12.040248585302038, -77.03993927003302], [-12.050047116528843, -77.02448169303511], [-12.044804866577001, -77.02154422636042], [-12.040397656836609, -77.03373871559225]], strokeColor: "#131540", strokeOpacity: .6, strokeWeight: 6 } }); $("<img/>").attr("src", i).appendTo("#gmap_static_map_polyline"); GMaps.createPanorama({ el: "#gmap_panorama", lat: 42.3455, lng: -71.0983 }) });