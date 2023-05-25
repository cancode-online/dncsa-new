// define an HTML conversion "method" associated with Classroom
Classroom.prototype._toHtml = function () {
	// HTML Style is build using inline structure
	var style =
		'display:inline-block;' + 'border: 2px solid grey;' + 'box-shadow: 0.8em 0.4em 0.4em grey;';

	// HTML Body of Table is build as a series of concatenations (+=)
	var body = '';
	// Heading for Array Columns
	body += '<tr>';
	body += '<th><mark>' + 'Name' + '</mark></th>';
	body += '<th><mark>' + 'GitHub ID' + '</mark></th>';
	body += '<th><mark>' + 'Class Of' + '</mark></th>';
	body += '<th><mark>' + 'Role' + '</mark></th>';
	body += '</tr>';
	// Data of Array, iterate through each row of compsci.classroom
	for (var row in compsci.classroom) {
		// tr for each row, a new line
		body += '<tr>';
		// td for each column of data
		body += '<td>' + compsci.classroom[row].name + '</td>';
		body += '<td>' + compsci.classroom[row].ghID + '</td>';
		body += '<td>' + compsci.classroom[row].classOf + '</td>';
		body += '<td>' + compsci.classroom[row].role + '</td>';
		// tr to end line
		body += '<tr>';
	}

	// Build and HTML fragment of div, table, table body
	return "<div style='" + style + "'>" + '<table>' + body + '</table>' + '</div>';
};

// IJavaScript HTML processor receive parameter of defined HTML fragment
$$.html(compsci._toHtml());
