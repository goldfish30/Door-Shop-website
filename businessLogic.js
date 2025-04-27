/**
 * businessLogic.js
 * This file contains the main business logic for the door ordering system
 * Includes chart visualization, form validation, and order processing
 */

// Load Google Charts library and set up chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/**
 * Draw sales chart using Google Charts
 * Displays door sales data in a pie chart
 */
function drawChart() {
	// Set Data for pie chart
	var data = google.visualization.arrayToDataTable([
		['Door engrave', 'Mhl'],
		['Duo-panel',1567],
		['longitudinal-lines',1338],
		['width-lines',1251],
		['smooth',1844],
	]);

	// Set Chart Options
	var options = {
		title:'Door sales 2024',
		backgroundColor: '#f1f0f0'
	};

	// Draw the pie chart in the specified element
	var chart = new google.visualization.PieChart(document.getElementById('myChart'));
	chart.draw(data, options);
}

/**
 * Change the duo-panel door image based on selected color
 * Updates the image source when user selects a different color
 */
function changeImageDouPanel() {
    if (document.getElementById("color-duo-panel").value == "white")			
        document.getElementById("duo-panel-door").src = "./images/duo-panel-white.png";
    else
		document.getElementById("duo-panel-door").src = "./images/duo-panel-cream.png";
}

/**
 * Change the longitudinal lines door image based on selected color
 * Updates the image source when user selects a different color
 */
function changeImageLongLines() {
    if (document.getElementById("color-long-lines").value == "white")			
        document.getElementById("long-lines-door").src = "./images/long-lines-white.png";
    else
		document.getElementById("long-lines-door").src = "./images/long-lines-cream.png";
}

/**
 * Change the width lines door image based on selected color
 * Updates the image source when user selects a different color
 */
function changeImageWidthLines() {
    if (document.getElementById("color-width-lines").value == "white")			
        document.getElementById("width-lines-door").src = "./images/width-lines-white.png";
    else
		document.getElementById("width-lines-door").src = "./images/width-lines-cream.png";
}

/**
 * Change the smooth door image based on selected color
 * Updates the image source when user selects a different color
 */
function changeImageSmooth() {
    if (document.getElementById("color-smooth").value == "white")			
        document.getElementById("smooth-door").src = "./images/smooth-white.png";
    else
		document.getElementById("smooth-door").src = "./images/smooth-cream.png";
}

/**
 * Process customer and order information when the order is submitted
 * Validates form fields and calls processInfo() if validation passes
 */
function GetClientAndOrderInfo(){
	// Get customer information from form fields
	var firstName = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var cell = document.getElementById('cell').value;
	var email = document.getElementById('email').value;
	var qORc = document.getElementById('text').value;

	var alertMsg = "";
	
	// Validate first name
	if(firstName == ''){
		alertMsg = alertMsg + "Please enter your first name";
	}
	else{
		// Check if first name contains any numbers
		for (let i = 0; i < firstName.length; i++) {
			if (!isNaN(firstName[i])) {
				alertMsg = alertMsg + "\nPlease enter a valid first name";
				break;
			}
		}
	}
	
	// Validate last name
	if(lastName == ''){
		alertMsg = alertMsg + "\nPlease enter your last name";
	}
	else{
		// Check if last name contains any numbers
		for (let i = 0; i < lastName.length; i++) {
			if (!isNaN(lastName[i])) {
				alertMsg = alertMsg + "\nPlease enter a valid last name";
				break;
			}
		}
	}
	
	// Validate cell phone number
	if(cell == ''){
		alertMsg = alertMsg + "\nPlease enter your cell number";
	}
	else{
		// Check if cell number is in valid format (10 digits starting with 05)
		if(cell.length === 10 && cell[0] === '0' && cell[1] === '5') {
			for (let i = 2; i < cell.length; i++) {
				if (isNaN(cell[i])) {
					alertMsg = alertMsg + "\nPlease enter a valid cell number";
				}
			}
		}
		else{
			alertMsg = alertMsg + "\nPlease enter a valid cell number";
		}
	}
	
	// Validate email
	if(email == ''){
		alertMsg = alertMsg + "\nPlease enter your email";
	}
	
	// Display validation errors if any, otherwise process the order
	if(alertMsg != ''){
		alert(alertMsg);
	}
	else{
		processInfo(firstName, lastName, cell, email, qORc);
		alert("order sent successfully!");
		cleanForm();
	}
}

/**
 * Create an array containing details of ordered doors
 * Gathers information from form fields for each selected door
 * @returns {Array} Array of door orders with their details
 */
function createOrder() {
    var doorNames = ["duo-panel", "long-lines", "width-lines", "smooth"];
    var order = [];

    // Loop through each door type and add to order if quantity > 0
    for (var i = 0; i < 4; i++) {
        var width = document.getElementById(`width-${doorNames[i]}`).value;
        var quantity = document.getElementById(`quantity-${doorNames[i]}`).value;
        var color = document.getElementById(`color-${doorNames[i]}`).value;
		var type = document.getElementById(`type-${doorNames[i]}`).value;

        if (parseInt(quantity) > 0) {
            order.push([doorNames[i], width, quantity, color, type]);
        }
    }
    return order;
}

/**
 * Reset all form fields to their default values
 * Called after successful order submission
 */
function cleanForm(){
	// Reset customer information fields
	document.getElementById('fname').value = '';
	document.getElementById('lname').value = '';
	document.getElementById('cell').value = '';
	document.getElementById('email').value = '';
	
	// Reset door selection fields to defaults
	document.getElementById('width-duo-panel').value = '63';
	document.getElementById('width-long-lines').value = '63';
	document.getElementById('width-width-lines').value = '63';
	document.getElementById('width-smooth').value = '63';	
	document.getElementById('color-duo-panel').value = 'white';	
	document.getElementById('color-long-lines').value = 'white';	
	document.getElementById('color-width-lines').value = 'white';
	document.getElementById('color-smooth').value = 'white';	
	document.getElementById('quantity-duo-panel').value = '0';
	document.getElementById('quantity-long-lines').value = '0';
	document.getElementById('quantity-width-lines').value = '0';
	document.getElementById('quantity-smooth').value = '0';
}
