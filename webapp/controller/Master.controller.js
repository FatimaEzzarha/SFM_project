sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sfm.salesproject.controller.Master", {
            onInit: function () {

            },

            onTableNavToDetailItemPress: function (oControlEvent) {
                // Get Selected List Item
            const oListItem = oControlEvent.getParameter("listItem");
            // Get Flow Number
            const sSalesDocument = oListItem.getBindingContext().getProperty("SalesDocument");

            // Navigate to Details Page
            this.getRouter().navTo("RouteDetails", {
                salesDocument: sSalesDocument
            });
            },

            onTableSelectionChange: function ( ) {

            }
        });
    });
