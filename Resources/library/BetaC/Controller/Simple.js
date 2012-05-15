var SimpleController = function() {
	this._currentWindow = null;
};

SimpleController.prototype._open = function(window) {
	window.open();
	if (this._currentWindow) {
		this._currentWindow.close();
	}
	this._currentWindow = window;
};

module.exports = SimpleController;