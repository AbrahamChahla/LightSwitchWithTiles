/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AdminMenu(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AdminMenu screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TilesForMenu" type="msls.VisualCollection" elementType="msls.application.MenuTile">
        /// Gets the tilesForMenu for this screen.
        /// </field>
        /// <field name="MenuName" type="String">
        /// Gets or sets the menuName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AdminMenu.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AdminMenu", parameters);
    }

    function MenuAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenuAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Menu" type="msls.application.Menu">
        /// Gets or sets the menu for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenuAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenuAddEdit", parameters);
    }

    function MenusBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenusBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Menus" type="msls.VisualCollection" elementType="msls.application.Menu">
        /// Gets the menus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenusBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenusBrowse", parameters);
    }

    function MenuTileAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenuTileAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MenuTile" type="msls.application.MenuTile">
        /// Gets or sets the menuTile for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenuTileAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenuTileAddEdit", parameters);
    }

    function MenuView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenuView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Menu" type="msls.application.Menu">
        /// Gets or sets the menu for this screen.
        /// </field>
        /// <field name="MenuTiles" type="msls.VisualCollection" elementType="msls.application.MenuTile">
        /// Gets the menuTiles for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenuView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenuView", parameters);
    }

    function Profile(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Profile screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Profile.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Profile", parameters);
    }

    function Start(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Start screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TilesForMenu" type="msls.VisualCollection" elementType="msls.application.MenuTile">
        /// Gets the tilesForMenu for this screen.
        /// </field>
        /// <field name="MenuName" type="String">
        /// Gets or sets the menuName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Start.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Start", parameters);
    }

    msls._addToNamespace("msls.application", {

        AdminMenu: $defineScreen(AdminMenu, [
            {
                name: "TilesForMenu", kind: "collection", elementType: lightSwitchApplication.MenuTile,
                createQuery: function (MenuName) {
                    return this.dataWorkspace.ApplicationData.TilesForMenu(MenuName);
                }
            },
            { name: "MenuName", kind: "local", type: String }
        ], [
        ]),

        MenuAddEdit: $defineScreen(MenuAddEdit, [
            { name: "Menu", kind: "local", type: lightSwitchApplication.Menu }
        ], [
        ]),

        MenusBrowse: $defineScreen(MenusBrowse, [
            {
                name: "Menus", kind: "collection", elementType: lightSwitchApplication.Menu,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Menus;
                }
            }
        ], [
        ]),

        MenuTileAddEdit: $defineScreen(MenuTileAddEdit, [
            { name: "MenuTile", kind: "local", type: lightSwitchApplication.MenuTile }
        ], [
        ]),

        MenuView: $defineScreen(MenuView, [
            { name: "Menu", kind: "local", type: lightSwitchApplication.Menu },
            {
                name: "MenuTiles", kind: "collection", elementType: lightSwitchApplication.MenuTile,
                getNavigationProperty: function () {
                    if (this.owner.Menu) {
                        return this.owner.Menu.details.properties.MenuTiles;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "DeleteMenuTile" },
            { name: "DeleteMenu" },
            { name: "MenuTiles_ItemTap" }
        ]),

        Profile: $defineScreen(Profile, [
        ], [
        ]),

        Start: $defineScreen(Start, [
            {
                name: "TilesForMenu", kind: "collection", elementType: lightSwitchApplication.MenuTile,
                createQuery: function (MenuName) {
                    return this.dataWorkspace.ApplicationData.TilesForMenu(MenuName);
                }
            },
            { name: "MenuName", kind: "local", type: String }
        ], [
        ]),

        showAdminMenu: $defineShowScreen(function showAdminMenu(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AdminMenu screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AdminMenu", parameters, options);
        }),

        showMenuAddEdit: $defineShowScreen(function showMenuAddEdit(Menu, options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenuAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("MenuAddEdit", parameters, options);
        }),

        showMenusBrowse: $defineShowScreen(function showMenusBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenusBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MenusBrowse", parameters, options);
        }),

        showMenuTileAddEdit: $defineShowScreen(function showMenuTileAddEdit(MenuTile, options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenuTileAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("MenuTileAddEdit", parameters, options);
        }),

        showMenuView: $defineShowScreen(function showMenuView(Menu, options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenuView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("MenuView", parameters, options);
        }),

        showProfile: $defineShowScreen(function showProfile(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Profile screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Profile", parameters, options);
        }),

        showStart: $defineShowScreen(function showStart(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Start screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Start", parameters, options);
        })

    });

}(msls.application));
