  const  LAT = 33.03, LONG = 35.11;
      require([
	    "esri/Graphic",
	    "esri/symbols/SimpleMarkerSymbol",
	    "esri/geometry/Point",
        "esri/tasks/Locator",
        "esri/Map",
        "esri/views/MapView"
        ],  function (
		     Graphic,
		     SimpleMarkerSymbol,
	         Point,
		     Locator, 
		     Map, 
		     MapView) 
		      {
		var pt = new Point({
            latitude: LAT,
			longitude: LONG 
        });	  
        // Set up a locator task using the world geocoding service
        var locatorTask = new Locator({
          url:
            "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
        });

        // Create the Map
        var map = new Map({
          basemap: "streets-navigation-vector"
        });

        // Create the MapView
        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: pt,
          zoom: 15
        });

         


        var sym = new SimpleMarkerSymbol({
           color: "#ffef33",
           style: "diamond",
           size: 8
        });
		
		var ptGraphic = new Graphic({
             geometry:pt,
             symbol:sym
        });
		
		view.graphics.add(ptGraphic);
		
        /*******************************************************************
         * This click event sets generic content on the popup not tied to
         * a layer, graphic, or popupTemplate. The location of the point is
         * used as input to a reverse geocode method and the resulting
         * address is printed to the popup content.
         *******************************************************************/
        view.popup.autoOpenEnabled = false;
        view.on("click", function(event) {
          // Get the coordinates of the click on the view
          var lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
          var lon = Math.round(event.mapPoint.longitude * 1000) / 1000;

          view.popup.open({
            // Set the popup's title to the coordinates of the location
            title: "Reverse geocode: [" + lon + ", " + lat + "]",
            location: event.mapPoint // Set the location of the popup to the clicked location
          });

          var params = {
            location: event.mapPoint
          };

          // Display the popup
          // Execute a reverse geocode using the clicked location
          locatorTask
            .locationToAddress(params)
            .then(function(response) {
              // If an address is successfully found, show it in the popup's content
              view.popup.content = response.address;
            })
            .catch(function(error) {
              // If the promise fails and no result is found, show a generic message
              view.popup.content = "No address was found for this location";
            });
        });
      });
	  
	  
	 