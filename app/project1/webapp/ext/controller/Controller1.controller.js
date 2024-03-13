sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) 
{
	'use strict';
	var p_status = "0";
	return ControllerExtension.extend('project1.ext.controller.Controller1', 
	{
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: 
		{
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf project1.ext.controller.Controller1
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing:
			{

				onAfterBinding: function (oBindingContext) 
				{
					debugger
					if(p_status == "0")
					{
						// if (sap.ui.getCore().byId("crud::studentObjectPage--fe::Form::GeneratedFacet1::Content"))
						{
							// sap.ui.getCore().byId("crud::studentObjectPage--fe::Form::GeneratedFacet1::Content").setVisible(false);
						}
					}
				},
				editFlow:
				{
					routing:
					{			
						onBeforeBinding:function()
						{
							debugger								// sap.ui.getCore().byId("crud::studentObjectPage--fe::Form::GeneratedFacet1::Content").setVisible(false);
						}
					},
					onBeforeEdit:function()
					{
						debugger
						// sap.ui.getCore().byId("crud::studentObjectPage--fe::Form::GeneratedFacet1::Content").setVisible(true);
						p_status = "1";				
					},				
					onAfterEdit:function()
					{
						debugger
						// sap.ui.getCore().byId("crud::studentObjectPage--fe::Form::GeneratedFacet1::Content").setVisible(true);
						p_status = "2";
					},
					onBeforeEdit:function()
					{
						// this.getView().getContent()[0].getSections()[0].setVisible(true);
					}
				}
			}
		}
	});
});	
