/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AdminMenu.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AdminMenu
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AdminMenu,
            data: lightSwitchApplication.AdminMenu,
            value: lightSwitchApplication.AdminMenu
        },
        ModernUIContent: {
            _$class: msls.ContentItem,
            _$name: "ModernUIContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.AdminMenu,
            data: lightSwitchApplication.AdminMenu,
            value: lightSwitchApplication.AdminMenu
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AdminMenu
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AdminMenu, {
        /// <field>
        /// Called when a new AdminMenu screen is created.
        /// <br/>created(msls.application.AdminMenu screen)
        /// </field>
        created: [lightSwitchApplication.AdminMenu],
        /// <field>
        /// Called before changes on an active AdminMenu screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AdminMenu screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AdminMenu],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AdminMenu().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ModernUIContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModernUIContent_render: [$element, function () { return new lightSwitchApplication.AdminMenu().findContentItem("ModernUIContent"); }]
    });

    lightSwitchApplication.MenuAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenuAddEdit,
            data: lightSwitchApplication.MenuAddEdit,
            value: lightSwitchApplication.MenuAddEdit
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.MenuAddEdit,
            data: lightSwitchApplication.MenuAddEdit,
            value: String
        },
        Screen: {
            _$class: msls.ContentItem,
            _$name: "Screen",
            _$parentName: "Details",
            screen: lightSwitchApplication.MenuAddEdit,
            data: lightSwitchApplication.MenuAddEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenuAddEdit, {
        /// <field>
        /// Called when a new MenuAddEdit screen is created.
        /// <br/>created(msls.application.MenuAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.MenuAddEdit],
        /// <field>
        /// Called before changes on an active MenuAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenuAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenuAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.MenuAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.MenuAddEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the Screen content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Screen_postRender: [$element, function () { return new lightSwitchApplication.MenuAddEdit().findContentItem("Screen"); }]
    });

    lightSwitchApplication.MenusBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenusBrowse
        },
        MenuList: {
            _$class: msls.ContentItem,
            _$name: "MenuList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenusBrowse,
            data: lightSwitchApplication.MenusBrowse,
            value: lightSwitchApplication.MenusBrowse
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "MenuList",
            screen: lightSwitchApplication.MenusBrowse,
            data: lightSwitchApplication.MenusBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.MenusBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.Menu
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MenusBrowse,
            data: lightSwitchApplication.Menu,
            value: lightSwitchApplication.Menu
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenusBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenusBrowse, {
        /// <field>
        /// Called when a new MenusBrowse screen is created.
        /// <br/>created(msls.application.MenusBrowse screen)
        /// </field>
        created: [lightSwitchApplication.MenusBrowse],
        /// <field>
        /// Called before changes on an active MenusBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenusBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenusBrowse],
        /// <field>
        /// Called after the MenuList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuList_postRender: [$element, function () { return new lightSwitchApplication.MenusBrowse().findContentItem("MenuList"); }],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.MenusBrowse().findContentItem("Menu"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.MenusBrowse().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.MenuTileAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuTileAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTileAddEdit,
            value: lightSwitchApplication.MenuTileAddEdit
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTileAddEdit,
            value: lightSwitchApplication.MenuTile
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        Order: {
            _$class: msls.ContentItem,
            _$name: "Order",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: Number
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Size: {
            _$class: msls.ContentItem,
            _$name: "Size",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Color: {
            _$class: msls.ContentItem,
            _$name: "Color",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        OnClick: {
            _$class: msls.ContentItem,
            _$name: "OnClick",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        StatusFgColor: {
            _$class: msls.ContentItem,
            _$name: "StatusFgColor",
            _$parentName: "Group",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        StatusBgColor: {
            _$class: msls.ContentItem,
            _$name: "StatusBgColor",
            _$parentName: "Group",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Icon: {
            _$class: msls.ContentItem,
            _$name: "Icon",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        IconFgColor: {
            _$class: msls.ContentItem,
            _$name: "IconFgColor",
            _$parentName: "Group1",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        IconBgColor: {
            _$class: msls.ContentItem,
            _$name: "IconBgColor",
            _$parentName: "Group1",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Badge: {
            _$class: msls.ContentItem,
            _$name: "Badge",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        BadgeFgColor: {
            _$class: msls.ContentItem,
            _$name: "BadgeFgColor",
            _$parentName: "Group2",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        BadgeBgColor: {
            _$class: msls.ContentItem,
            _$name: "BadgeBgColor",
            _$parentName: "Group2",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuTileAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenuTileAddEdit, {
        /// <field>
        /// Called when a new MenuTileAddEdit screen is created.
        /// <br/>created(msls.application.MenuTileAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.MenuTileAddEdit],
        /// <field>
        /// Called before changes on an active MenuTileAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenuTileAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenuTileAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("left"); }],
        /// <field>
        /// Called after the Order content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Order"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Type"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the Size content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Size_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Size"); }],
        /// <field>
        /// Called after the Color content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Color_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Color"); }],
        /// <field>
        /// Called after the OnClick content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OnClick_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("OnClick"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("right"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Status"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Group"); }],
        /// <field>
        /// Called after the StatusFgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusFgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("StatusFgColor"); }],
        /// <field>
        /// Called after the StatusBgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusBgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("StatusBgColor"); }],
        /// <field>
        /// Called after the Icon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Icon"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Group1"); }],
        /// <field>
        /// Called after the IconFgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IconFgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("IconFgColor"); }],
        /// <field>
        /// Called after the IconBgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IconBgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("IconBgColor"); }],
        /// <field>
        /// Called after the Badge content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Badge_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Badge"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Group2"); }],
        /// <field>
        /// Called after the BadgeFgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BadgeFgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("BadgeFgColor"); }],
        /// <field>
        /// Called after the BadgeBgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BadgeBgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("BadgeBgColor"); }]
    });

    lightSwitchApplication.MenuView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuView
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuView,
            value: lightSwitchApplication.MenuView
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuView,
            value: lightSwitchApplication.MenuView
        },
        MenuTiles: {
            _$class: msls.ContentItem,
            _$name: "MenuTiles",
            _$parentName: "Group1",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.MenuView,
                _$entry: {
                    elementType: lightSwitchApplication.MenuTile
                }
            }
        },
        MenuTilesTemplate: {
            _$class: msls.ContentItem,
            _$name: "MenuTilesTemplate",
            _$parentName: "MenuTiles",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        Order: {
            _$class: msls.ContentItem,
            _$name: "Order",
            _$parentName: "MenuTilesTemplate",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "MenuTilesTemplate",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuView,
            value: lightSwitchApplication.MenuView
        },
        MenuTiles_selectedItem: {
            _$class: msls.ContentItem,
            _$name: "MenuTiles_selectedItem",
            _$parentName: "Group2",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuView,
            value: lightSwitchApplication.MenuTile
        },
        Order1: {
            _$class: msls.ContentItem,
            _$name: "Order1",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: Number
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Size: {
            _$class: msls.ContentItem,
            _$name: "Size",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Color: {
            _$class: msls.ContentItem,
            _$name: "Color",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        OnClick: {
            _$class: msls.ContentItem,
            _$name: "OnClick",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        StatusFgColor: {
            _$class: msls.ContentItem,
            _$name: "StatusFgColor",
            _$parentName: "Group3",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        StatusBgColor: {
            _$class: msls.ContentItem,
            _$name: "StatusBgColor",
            _$parentName: "Group3",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Icon: {
            _$class: msls.ContentItem,
            _$name: "Icon",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        IconFgColor: {
            _$class: msls.ContentItem,
            _$name: "IconFgColor",
            _$parentName: "Group4",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        IconBgColor: {
            _$class: msls.ContentItem,
            _$name: "IconBgColor",
            _$parentName: "Group4",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Badge: {
            _$class: msls.ContentItem,
            _$name: "Badge",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group5: {
            _$class: msls.ContentItem,
            _$name: "Group5",
            _$parentName: "MenuTiles_selectedItem",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        BadgeFgColor: {
            _$class: msls.ContentItem,
            _$name: "BadgeFgColor",
            _$parentName: "Group5",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        BadgeBgColor: {
            _$class: msls.ContentItem,
            _$name: "BadgeBgColor",
            _$parentName: "Group5",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenuView, {
        /// <field>
        /// Called when a new MenuView screen is created.
        /// <br/>created(msls.application.MenuView screen)
        /// </field>
        created: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called before changes on an active MenuView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenuView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to determine if the DeleteMenuTile method can be executed.
        /// <br/>canExecute(msls.application.MenuView screen)
        /// </field>
        DeleteMenuTile_canExecute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to execute the DeleteMenuTile method.
        /// <br/>execute(msls.application.MenuView screen)
        /// </field>
        DeleteMenuTile_execute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to determine if the DeleteMenu method can be executed.
        /// <br/>canExecute(msls.application.MenuView screen)
        /// </field>
        DeleteMenu_canExecute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to execute the DeleteMenu method.
        /// <br/>execute(msls.application.MenuView screen)
        /// </field>
        DeleteMenu_execute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to determine if the MenuTiles_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.MenuView screen)
        /// </field>
        MenuTiles_ItemTap_canExecute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to execute the MenuTiles_ItemTap method.
        /// <br/>execute(msls.application.MenuView screen)
        /// </field>
        MenuTiles_ItemTap_execute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Group1"); }],
        /// <field>
        /// Called after the MenuTiles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuTiles_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("MenuTiles"); }],
        /// <field>
        /// Called after the MenuTilesTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuTilesTemplate_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("MenuTilesTemplate"); }],
        /// <field>
        /// Called after the Order content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Order"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Group2"); }],
        /// <field>
        /// Called after the MenuTiles_selectedItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuTiles_selectedItem_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("MenuTiles_selectedItem"); }],
        /// <field>
        /// Called after the Order1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order1_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Order1"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Type"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Size content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Size_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Size"); }],
        /// <field>
        /// Called after the Color content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Color_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Color"); }],
        /// <field>
        /// Called after the OnClick content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OnClick_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("OnClick"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Status"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Group3"); }],
        /// <field>
        /// Called after the StatusFgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusFgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("StatusFgColor"); }],
        /// <field>
        /// Called after the StatusBgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusBgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("StatusBgColor"); }],
        /// <field>
        /// Called after the Icon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Icon"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Group4"); }],
        /// <field>
        /// Called after the IconFgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IconFgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("IconFgColor"); }],
        /// <field>
        /// Called after the IconBgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IconBgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("IconBgColor"); }],
        /// <field>
        /// Called after the Badge content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Badge_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Badge"); }],
        /// <field>
        /// Called after the Group5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group5_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Group5"); }],
        /// <field>
        /// Called after the BadgeFgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BadgeFgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("BadgeFgColor"); }],
        /// <field>
        /// Called after the BadgeBgColor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BadgeBgColor_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("BadgeBgColor"); }]
    });

    lightSwitchApplication.Profile.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Profile
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Profile,
            data: lightSwitchApplication.Profile,
            value: lightSwitchApplication.Profile
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Profile
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Profile, {
        /// <field>
        /// Called when a new Profile screen is created.
        /// <br/>created(msls.application.Profile screen)
        /// </field>
        created: [lightSwitchApplication.Profile],
        /// <field>
        /// Called before changes on an active Profile screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Profile screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Profile],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Profile().findContentItem("Group"); }]
    });

    lightSwitchApplication.Start.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Start
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Start,
            data: lightSwitchApplication.Start,
            value: lightSwitchApplication.Start
        },
        ModernUIContent: {
            _$class: msls.ContentItem,
            _$name: "ModernUIContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.Start,
            data: lightSwitchApplication.Start,
            value: lightSwitchApplication.Start
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Start
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Start, {
        /// <field>
        /// Called when a new Start screen is created.
        /// <br/>created(msls.application.Start screen)
        /// </field>
        created: [lightSwitchApplication.Start],
        /// <field>
        /// Called before changes on an active Start screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Start screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Start],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Start().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ModernUIContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModernUIContent_render: [$element, function () { return new lightSwitchApplication.Start().findContentItem("ModernUIContent"); }]
    });

}(msls.application));