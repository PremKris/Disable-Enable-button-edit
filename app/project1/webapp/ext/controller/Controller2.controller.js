sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) 
{
	'use strict';

	return ControllerExtension.extend('project1.ext.controller.Controller2', 
	{
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: 
		{
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf project1.ext.controller.Controller2
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				debugger
			},
			routing:
			{

				onBeforeBinding: function (oBindingContext) 
				{
					debugger
					// sap.ui.getCore().byId("project1::parentObjectPage--fe::FacetSection::GeneratedFacet1-innerGrid").mAggregations.content[0].setVisible(true);
					// sap.ui.getCore().byId("project1::parentObjectPage--fe::StandardAction::Edit").setVisible(false);					
					// sap.ui.getCore().byId("project1::parentObjectPage--fe::StandardAction::Edit").destroy();
					// let form = sap.ui.getCore().byId("project1::parentObjectPage--fe::FacetSection::GeneratedFacet1-innerGrid").mAggregations.content[0];					
				},
				onAfterBinding: function (oBindingContext) 
				{
					debugger
					this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setEnabled(true);
					let form = sap.ui.getCore().byId("project1::parentObjectPage--fe::FacetSection::GeneratedFacet1-innerGrid").mAggregations.content[0];
					let path = form.oPropagatedProperties.oBindingContexts.undefined.sPath;
					let startIndex = path.indexOf("p_id=");
					if (startIndex !== -1) 
					{
  						// Extract the substring starting from "p_id="
  						let subString = path.substring(startIndex);
  						// Find the index of the closing parenthesis ")"
 						let endIndex = subString.indexOf(")");
  						if (endIndex !== -1) 
						{
					    	// Extract the substring until the closing parenthesis ")"
 					    	let pIdSubstring = subString.substring(0, endIndex + 1);
					    	// Split the substring using "=" and get the value
					    	let pIdValue = pIdSubstring.split("=")[1];
							let id = pIdValue[0];
							if (id == "2")
							{
								this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setEnabled(false);
							}
							debugger 
							// sap.ui.getCore().byId("project1::parentObjectPage--fe::StandardAction::Edit").setVisible(false);
							// sap.ui.getCore().byId("project1::parentObjectPage--fe::StandardAction::Edit").destroy();
						}
			        }
				}
			}
		}			
	});
});
