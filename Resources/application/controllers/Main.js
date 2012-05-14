var MainController = require('/library/Qpqp/Controller/Abstract');

MainController.prototype.main = function() {
	var SkyWindow = require('/application/views/windows/Sky');
	this._open(new SkyWindow(this));
};

module.exports = MainController;