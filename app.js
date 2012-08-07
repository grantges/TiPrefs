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
	id : "SAVE_ON_QUIT",
	caption : "Save on quit"
});

prefs.addSwitch({
	id : "HIDE_ALERTS",
	caption : "Hide Alerts"
});

prefs.addChoice({
	id : "DAY_OF_WEEK",
	caption : "Day of Week",
	choices : [{
		title : 'Every Monday',
		value : 1
	}, {
		title : 'Every Tuesday',
		value : 2
	}, {
		title : 'Every Wednesday',
		value : 3
	}, {
		title : 'Every Thursday',
		value : 4
	}, {
		title : 'Every Friday',
		value : 5
	}, {
		title : 'Every Saturday',
		value : 6
	}, {
		title : 'Every Sunday',
		value : 7
	}]
});

prefs.addTextInput({
	id : "USERNAME",
	caption : "username",
	value : "myuser"
});

prefs.addTextInput({
	id : "API_KEY",
	caption : "API Key",
	value : "1234"

});

prefs.open();

