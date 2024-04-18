sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController,
	JSONModel) {
        "use strict";

        return BaseController.extend("sfm.salesproject.controller.Details", {
            onInit: function () {
                var oModel = new JSONModel({c : ""});
                this.setModel(oModel, "DetailsView");
                this.getRouter().getRoute("RouteDetails").attachMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function (oEvent) {
                var oArgs, oView, oQuery;
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
    
                // Set Flow Number to View Model
                this.getModel("DetailsView").setProperty("/salesDocument", oArgs.salesDocument);

                // Store Flow Number in local storage
                // localStorage.setItem("flowNumber", oArgs.FlowNumber);
    
                // Bind the Flow to the view
                oView.bindElement({
                    path: "/zc_sales_order_document('" + oArgs.salesDocument + "')",
                    events: {
                        change: this._onBindingChange.bind(this),
                        dataRequested: function (oEvent) {
                            oView.setBusy(true);
                        },
                        dataReceived: function (oEvent) {
                            oView.setBusy(false);
                        }
                    }
                });

                // Refrech Items SmartTable
                var oSmartTable = this.getView().byId("idSalesDocumentItemsSmartTable");
                oSmartTable.rebindTable();
                // Set the initial tab
            //     oQuery = oArgs["?query"];
    
            //     if (oQuery && _aValidTabKeys.indexOf(oQuery.tab) > -1) {
            //         oView.getModel("eventDetailsView").setProperty("/selectedTabKey", oQuery.tab);
            //         // support lazy loading for the screens, rules, context, spec and protocol tab
            //         if (oQuery.tab === "Screens" || oQuery.tab === "Rules" ||
            //             oQuery.tab === "Context" || oQuery.tab === "Spec" ||
            //             oQuery.tab === "Protocol"
            //         ) {
            //             // the target is either "EventDetailsTabScreens" or "EventDetailsTabRules"
            //             //                   or "EventDetailsTabContext" or "EventDetailsTabSpec"
            //             //                   or "EventDetailsTabProtocol"
            //             this.getRouter().getTargets().display("EventDetailsTab" + oQuery.tab);
            //         }
            //     } else {
            //         // The default query param should be visible at all time
            //         this.getRouter().navTo("RouteEventDetails", {
            //             FlowNumber: oArgs.FlowNumber,
            //             query: {
            //                 tab: _aValidTabKeys[0]
            //             }
            //         }, {}, true /*no history*/);
            //     }
            },

            _onBindingChange: function (oEvent) {
                // No data for the binding
                if (!this.getView().getBindingContext()) {
                    // this.getRouter().getTargets().display("notFound");
                }
            },
   
        });
    });