// stores each row in the settings view
var rowData;

// the name of the settings
var name;

// the shared navBar for opening subviews
var navBar;

// helper function to build a new row
// takes .label and .value controls e.g. Ti.UI.Label and Ti.UI.TextField
function addRow(controls) {

	row = Ti.UI.createTableViewRow({
		height : 40
	});

	// position the label
	controls.label.top = 7;
	controls.label.left = 7;

	// position the value
	controls.value.right = 10;
	controls.value.top = 6;

	// if icon specfied, let's place that, adjust
	// the label to fit.
	if (controls.icon) {
		image = Ti.UI.createImageView({
			image : controls.icon,
			width : 26,
			height : 26,
			top : 6
		});

		image.left = 6;
		controls.label.left = 40;
		row.add(image);
	}

	// add the label and value control to the row
	row.add(controls.label);
	row.add(controls.value);

	// push the row to the array
	rowData.push(row);

	// return the row object
	return row;
}

// initialise a new settings panel
exports.init = function(title) {
	rowData = [];
	name = title || "settings";
}
// add a textinput
exports.addTextInput = function(opts) {

	var label = Ti.UI.createLabel({
		font : {
			fontSize : 17,
			fontWeight : 'bold'
		},
		text : opts.caption
	});

	var value = Ti.UI.createLabel({
		font : {
			fontSize : 17,
			fontWeight : 'normal'

		},
		text : Ti.App.Properties.getString(name + "." + opts.id || opts.name) || opts.value,
		color : '#777'
	});

	row = addRow({
		label : label,
		value : value
	});

	row.addEventListener("click", function(e) {

		var rows = [];

		var editWin = Ti.UI.createWindow({
			title : 'edit',
			navBarHidden : false
		});

		var table = Ti.UI.createTableView({
			style : Ti.UI.iPhone.TableViewStyle.GROUPED
		});

		var row = Ti.UI.createTableViewRow({
			height : 50
		});

		var text = Ti.UI.createTextField({
			left : 10,
			right : 10,
			value : value.text
		});

		var cancel = Ti.UI.createButton({
			title : 'Cancel',
			width : 50,
			height : 30
		});

		var save = Ti.UI.createButton({
			title : 'Save',
			width : 50,
			height : 30
		});

		row.add(text);

		rows.push(row);

		table.setData(rows);

		editWin.setLeftNavButton(cancel);
		editWin.setRightNavButton(save);

		editWin.add(table);

		cancel.addEventListener('click', function() {

			navBar.close(editWin);
		});

		save.addEventListener('click', function() {
			// save the value
			value.text = text.value;
			Ti.App.Properties.setString(name + "." + (opts.id || opts.caption), text.value);
			navBar.close(editWin);
		});

		navBar.open(editWin);
	});
}
// add a switch row
exports.addSwitch = function(opts) {
	var label = Ti.UI.createLabel({
		font : {
			fontSize : 17,
			fontWeight : 'bold'
		},
		text : opts.caption
	});

	var toggle = Ti.UI.createSwitch({
		value : Ti.App.Properties.getBool(name + "." + opts.caption, false)
	});

	toggle.addEventListener("change", function(e) {
		Ti.App.Properties.setBool(name + "." + (opts.id || opts.caption), e.value);

		if (opts.onChange) {
			opts.onChange(toggle.value);
		};
	});

	addRow({
		label : label,
		value : toggle
	});
}
// open the prefs window
exports.open = function(tabGroup) {

	// create a window
	var prefsWin = Ti.UI.createWindow({
		title : name
	});

	// create a table
	var table = Titanium.UI.createTableView({
		style : Titanium.UI.iPhone.TableViewStyle.GROUPED
	});

	// push the rows
	table.data = rowData;

	// add it to the specified window
	prefsWin.add(table);

	// if we have a tabGroup specified
	if (!tabGroup) {

		// we need a navbar
		navBar = Ti.UI.iPhone.createNavigationGroup({
			window : prefsWin
		});

		// create a host window
		var rootWin = Ti.UI.createWindow();

		// add the navbar
		rootWin.add(navBar);

		// open it
		rootWin.open();

	} else {

		navBar = tabGroup.activeTab;
		navBar.open(prefsWin);

	}

}
