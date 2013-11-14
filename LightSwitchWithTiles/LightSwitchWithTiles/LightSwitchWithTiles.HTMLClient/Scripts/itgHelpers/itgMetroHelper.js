
// Create a simple tile based on passed options
function createSimpleTileHtml(tileData) {

	// Base tile = ID, Size, Color, onClick
	var tile = "<div id='" + tileData.Id + "' class='tile " + tileData.Size + " " + tileData.Color + "' onclick=\"" + tileData.OnClick + ";\">";

	// Was an icon specified? Icon name and Color
	if (tileData.Icon) {
		tile += "<div class='tile-content icon'><i class='" + tileData.Icon + " " + tileData.IconFgColor + " " + tileData.IconBgColor + "'/></div>";
		//tile += "<div class='tile-content icon'><i class='" + tileData.Icon  + "'/></div>";
	}

	// Status message for the tile, again Color and Message
	if (tileData.Status) {
		tile += "<div class='tile-status'><span class='name " + tileData.StatusFgColor + " " + tileData.StatusBgColor + "'>" + tileData.Status + "</span></div>";
	}

	// How about our little badge, again Color and Badge number
	if (tileData.Badge) {
		tile += "<div class='brand'><div class='badge " + tileData.BadgeFgColor + " " + tileData.BadgeBgColor + "'>" + tileData.Badge + "</div></div>";
	}

	return tile;
}


// Add array of tiles to the passed container
function addTilesToContainer(container, menuTiles) {
	
	// Add a class to our element to identify it as a metro container
	$(container).addClass("metro-container metro");
	
	// Create the tiles and add to our container
	$.each(menuTiles, function (index, item) {

		// Temp to hold our tile html
		var tempTile = "";

		// What type of tile to create?  Add additional as needed
		switch (item.Type) {
			case "simple":
				tempTile = createSimpleTileHtml(item);
			break;			
			default:
				tempTile = createSimpleTileHtml(item);
		}

		// Append the tile to our container, repeat as necessary
		$(tempTile).appendTo($(container));

	});

}


// Create a modern tile menu screen
function createModernTileMenu(container, contentItem, menuName) {
	
	// Set our query parameter to the menu name
	contentItem.screen.MenuName = menuName;

	// Add a unique identifier to our menuName for inclusion into the global stack
	menuName = "itg" + menuName;

	// Has the menu for this screen already been downloaded
	if (typeof myapp[menuName] == "function" || myapp[menuName] == undefined) {
		
		// It has not, so lets go get it 
		contentItem.screen.TilesForMenu.load().then(function () {
			
			// Save the entities to the global stack
			myapp[menuName] = contentItem.screen.TilesForMenu.data;
			
			// Go add the tiles to the container
			addTilesToContainer(container, myapp[menuName]);
		});
	} else {
		
		// Menu has already been downloaded, so just add the tiles to the container
		addTilesToContainer(container, myapp[menuName]);
	}

}


// Simple utility to get URL Query Parameters
function getUrlParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if (results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}

