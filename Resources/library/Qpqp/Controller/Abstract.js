var BaseController = function() {
	this.oldWindow = null;
};

BaseController.prototype._open = function(windowToOpen) {
	windowToOpen.open();
	if (this.oldWindow) {
		this.oldWindow.close();
	}
	this.oldWindow = windowToOpen;
};

module.exports = BaseController;