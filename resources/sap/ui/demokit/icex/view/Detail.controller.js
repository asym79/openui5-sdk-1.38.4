/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/IconPool","sap/ui/model/json/JSONModel","sap/m/InstanceManager","sap/m/MessageToast","sap/ui/Device"],function(C,I,J,a,M,D){"use strict";return C.extend("sap.ui.demokit.icex.view.Detail",{onInit:function(){var b=this.getOwnerComponent().getEventBus();b.subscribe("app","RefreshDetail",this.refreshDetail,this);this._setModel("sap-icon://question-mark");},_setModel:function(i){var f=this.getView().getModel("fav");var b=(f)?f.isFavorite(i):false;var m=this.getView().getModel();if(!m){m=new J({});this.getView().setModel(m);}var c=I.getIconInfo(i);var d=(!c)?"?":c.content.charCodeAt(0).toString(16);m.setData({name:i,id:d,showFavorite:!b,showUnfavorite:b,isPhone:D.system.phone,isNoPhone:!D.system.phone});},refreshDetail:function(c,e,d){if(d&&d.name){this._setModel(d.name);}},navBack:function(e){var b=this.getOwnerComponent().getEventBus();b.publish("nav","back");},favorite:function(e){var d=this.getView().getModel().getData();if(d&&d.name){var f=this.getView().getModel("fav");var n=f.toggleFavorite(d.name);if(a.hasOpenPopover()){a.closeAllPopovers();}if(n){M.show('The icon has been added to your favorites');}else{M.show('The icon has been removed from your favorites');}this._setModel(d.name);}}});});