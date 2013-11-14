/// <reference path="../GeneratedArtifacts/viewModel.js" />


// Optional
// Put our Menu Name as the screen header
myapp.MenuView.MenuTiles_postRender = function (element, contentItem) {

	// Bind so that changes will be reflected
	contentItem.dataBind("screen.Menu.Name", function (newValue) {
		contentItem.screen.details.displayName = newValue + " Menu";
	});

};

// When a tile in the list is tapped, hide/show appropriate buttons
myapp.MenuView.MenuTiles_ItemTap_execute = function (screen) {

	// Tile selected, show edit/delete tile buttons
	screen.findContentItem("DeleteMenuTile").isVisible = true;
	screen.findContentItem("EditMenuTile").isVisible = true;

	// Yet hide the buttons to edit/delete the menu itself
	screen.findContentItem("EditMenu").isVisible = false;
	screen.findContentItem("DeleteMenu").isVisible = false;

};


// Delete the selected tile
myapp.MenuView.DeleteMenuTile_execute = function (screen) {

	// Grab the selected, delete and apply
	screen.MenuTiles.selectedItem.deleteEntity();
	myapp.applyChanges();

	// Since we won't have a tile selected anymore, hide the tile buttons
	screen.findContentItem("DeleteMenuTile").isVisible = false;
	screen.findContentItem("EditMenuTile").isVisible = false;

	// Now show again the menu specific buttons
	screen.findContentItem("EditMenu").isVisible = true;
	screen.findContentItem("DeleteMenu").isVisible = true;

};


// Delete the entire menu and associated tiles
myapp.MenuView.DeleteMenu_execute = function (screen) {

	// Delete and commit, returning us to the browse screen
	screen.Menu.deleteEntity();
	myapp.commitChanges();

};


