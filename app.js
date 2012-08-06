// create a window
var win1 = Titanium.UI.createWindow({
	Title : "test"
});
win1.backgroundColor = '#fff';

var tabGroup = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Latest',
	window : win1
});

tabGroup.addTab(tab1);

tabGroup.open();

var prefs = require("TiPrefs/tiprefs");

// open the view

prefs.init("foo");

prefs.addSwitch({
	caption : "Save on quit"
});

prefs.addSwitch({
	caption : "Hide Alerts"
});

prefs.addTextInput({
	caption : "username",
	value : "myuser"
});

prefs.addTextInput({
	caption : "API Key",
	value : "1234"

});

prefs.open(win1);

