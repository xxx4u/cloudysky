function SkyWindow() {
	var Sky = require('/application/models/Sky');
	var Cloud = require('/application/models/Cloud');
		
	var that = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	var mySky = new Sky(768, 1024);
	that.add(mySky);

	var cloud = null;
	for(var i=1; i<10; i++) {
		cloud = new Cloud(10 * Math.random() - 5);
		cloud.left = Math.random() * 768;
		cloud.top = Math.random() * 1024;
		mySky.addCloud(cloud);
	}

	setInterval(function() {
		mySky.simulateNextStep();
	}, 50);
	
	return that;
}

exports = SkyWindow;
