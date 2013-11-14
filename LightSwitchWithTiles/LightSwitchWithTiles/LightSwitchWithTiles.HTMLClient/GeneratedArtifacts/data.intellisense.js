/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Menu, {
        /// <field>
        /// Called when a new menu is created.
        /// <br/>created(msls.application.Menu entity)
        /// </field>
        created: [lightSwitchApplication.Menu]
    });

    msls._addEntryPoints(lightSwitchApplication.MenuTile, {
        /// <field>
        /// Called when a new menuTile is created.
        /// <br/>created(msls.application.MenuTile entity)
        /// </field>
        created: [lightSwitchApplication.MenuTile]
    });

}(msls.application));
