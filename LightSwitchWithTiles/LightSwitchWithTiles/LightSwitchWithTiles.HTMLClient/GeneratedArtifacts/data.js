/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Menu(entitySet) {
        /// <summary>
        /// Represents the Menu entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this menu.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this menu.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this menu.
        /// </field>
        /// <field name="Screen" type="String">
        /// Gets or sets the screen for this menu.
        /// </field>
        /// <field name="MenuTiles" type="msls.EntityCollection" elementType="msls.application.MenuTile">
        /// Gets the menuTiles for this menu.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this menu.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this menu.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this menu.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this menu.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this menu.
        /// </field>
        /// <field name="details" type="msls.application.Menu.Details">
        /// Gets the details for this menu.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function MenuTile(entitySet) {
        /// <summary>
        /// Represents the MenuTile entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this menuTile.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this menuTile.
        /// </field>
        /// <field name="Order" type="Number">
        /// Gets or sets the order for this menuTile.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this menuTile.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this menuTile.
        /// </field>
        /// <field name="Size" type="String">
        /// Gets or sets the size for this menuTile.
        /// </field>
        /// <field name="Color" type="String">
        /// Gets or sets the color for this menuTile.
        /// </field>
        /// <field name="OnClick" type="String">
        /// Gets or sets the onClick for this menuTile.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this menuTile.
        /// </field>
        /// <field name="StatusFgColor" type="String">
        /// Gets or sets the statusFgColor for this menuTile.
        /// </field>
        /// <field name="StatusBgColor" type="String">
        /// Gets or sets the statusBgColor for this menuTile.
        /// </field>
        /// <field name="Icon" type="String">
        /// Gets or sets the icon for this menuTile.
        /// </field>
        /// <field name="IconFgColor" type="String">
        /// Gets or sets the iconFgColor for this menuTile.
        /// </field>
        /// <field name="IconBgColor" type="String">
        /// Gets or sets the iconBgColor for this menuTile.
        /// </field>
        /// <field name="Badge" type="String">
        /// Gets or sets the badge for this menuTile.
        /// </field>
        /// <field name="BadgeFgColor" type="String">
        /// Gets or sets the badgeFgColor for this menuTile.
        /// </field>
        /// <field name="BadgeBgColor" type="String">
        /// Gets or sets the badgeBgColor for this menuTile.
        /// </field>
        /// <field name="Menu" type="msls.application.Menu">
        /// Gets or sets the menu for this menuTile.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this menuTile.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this menuTile.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this menuTile.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this menuTile.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this menuTile.
        /// </field>
        /// <field name="details" type="msls.application.MenuTile.Details">
        /// Gets the details for this menuTile.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Menus" type="msls.EntitySet">
        /// Gets the Menus entity set.
        /// </field>
        /// <field name="MenuTiles" type="msls.EntitySet">
        /// Gets the MenuTiles entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Menu: $defineEntity(Menu, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "Screen", type: String },
            { name: "MenuTiles", kind: "collection", elementType: MenuTile },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        MenuTile: $defineEntity(MenuTile, [
            { name: "Id", type: Number },
            { name: "Order", type: Number },
            { name: "Type", type: String },
            { name: "Name", type: String },
            { name: "Size", type: String },
            { name: "Color", type: String },
            { name: "OnClick", type: String },
            { name: "Status", type: String },
            { name: "StatusFgColor", type: String },
            { name: "StatusBgColor", type: String },
            { name: "Icon", type: String },
            { name: "IconFgColor", type: String },
            { name: "IconBgColor", type: String },
            { name: "Badge", type: String },
            { name: "BadgeFgColor", type: String },
            { name: "BadgeBgColor", type: String },
            { name: "Menu", kind: "reference", type: Menu },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Menus", elementType: Menu },
            { name: "MenuTiles", elementType: MenuTile }
        ], [
            {
                name: "Menus_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Menus },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Menus(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MenuTiles_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.MenuTiles },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MenuTiles(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TilesForMenu", value: function (MenuName) {
                    return new $DataServiceQuery({ _entitySet: this.MenuTiles },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/TilesForMenu()",
                        {
                            MenuName: $toODataString(MenuName, "String?")
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
