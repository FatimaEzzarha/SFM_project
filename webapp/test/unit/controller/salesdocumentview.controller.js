/*global QUnit*/

sap.ui.define([
	"sfm/sales_project/controller/salesdocumentview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("salesdocumentview Controller");

	QUnit.test("I should test the salesdocumentview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
