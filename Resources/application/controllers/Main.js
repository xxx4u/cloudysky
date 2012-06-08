// Extends BetaC Simple Controller
var MainController = require('/library/BetaC/Controller/Simple').SimpleController;

MainController.prototype.main = function() {
	var SkyWindow = require('/application/views/windows/Sky').SkyWindow;
	this._open(new SkyWindow(this));
};

module.exports.MainController = MainController;