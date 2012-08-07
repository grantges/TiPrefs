iPrefs
======

A module to help build preferences/settings pages quickly allowing you to add Switches, TextInputs etc.

Currently supported : textinput, switch/bool.

Example:-

Add the module to your project

	var prefs = require("tiprefs");
	
Initialise new preferences window
	
	prefs.init("Settings");
	
Add a Switch (id is used for the key to save the setting, otherwise failsover to caption)

	prefs.addSwitch({
		id : "SAVE",
		caption : "Save on quit"
	});
	
Add a Text input (caption is used as the key as no ID specified)

	prefs.addTextInput({
		caption : "username",
		value : "myuser"
	});
	
Render it (and it'll create a navigation group container)
	
	prefs.open();
	
or specify a tabGroup and it'll use that
	
	prefs.open(tabGroup);
	