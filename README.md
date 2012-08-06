iPrefs
======

A module to help build preferences/settings pages quickly allowing you to add Switches, TextInputs etc.

Example:-

Add the module to your project

	var prefs = require("TiPrefs/tiprefs");
	
Initialise new preferences window
	
	prefs.init("Settings");
	
Add a Switch

	prefs.addSwitch({
		caption : "Save on quit"
	});
	
Add a Text input

	prefs.addTextInput({
		caption : "username",
		value : "myuser"
	});
	
Render it
	
	prefs.open();