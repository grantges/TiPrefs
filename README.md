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
		id : "save",
		caption : "Save on quit"
	});
	
Add a Text input (caption is used as the key as no ID specified)

	prefs.addTextInput({
		caption : "username",
		value : "myuser"
	});
	
Add a choice list

	prefs.addChoice({
		id : "day_of_week",
		caption : "Day of Week",
		choices : [
				  {title : 'Every Monday',value : 1}, 
				  {title : 'Every Tuesday',value : 2}, 
				  {title : 'Every Wednesday',value : 3}, 
				  {title : 'Every Thursday',value : 4}, 
				  {title : 'Every Friday',value : 5}, 
				  {title : 'Every Saturday',value : 6}, 
				  {title : 'Every Sunday',value : 7}
				  ]
	});
	
Render it (and it'll create a navigation group container)
	
	prefs.open();
	
or specify a tabGroup and it'll use that
	
	prefs.open(tabGroup);

You can retrieve values using the standard Ti properties based on the format

	name + "_" + id / caption
	name + "_" + id / caption + "_" + value


	Ti.App.Properties.getBool("Settings_save");
	
or for the choice list above

	Ti.App.Properties.getBool("Settings_day_of_week_1");

	