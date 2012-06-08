function SkyWindow() {
	var Sky = require('/application/models/Sky').Sky;
	var Cloud = require('/application/models/Cloud').Cloud;
		
	var that = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});

	var width = Titanium.Platform.displayCaps.platformWidth;
	var height = Titanium.Platform.displayCaps.platformHeight;
	var mySky = new Sky(width, height);
	that.add(mySky);

	var cloud = null;
	for(var i=1; i<10; i++) {
		cloud = new Cloud(10 * Math.random() - 5, width / 1024);
		cloud.left = Math.random() * width;
		cloud.top = Math.random() * height;
		mySky.addCloud(cloud);
	}

	setInterval(function() {
		mySky.simulateNextStep();
	}, 50);
	
	return that;
}

module.exports.SkyWindow = SkyWindow;
