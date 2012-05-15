// Extends BetaC Simple Controller
var MainController = require('/library/BetaC/Controller/Simple');

MainController.prototype.main = function() {
	var SkyWindow = require('/application/views/windows/Sky');
	this._open(new SkyWindow(this));
};

module.exports = MainController;