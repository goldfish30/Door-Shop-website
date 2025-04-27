/**
 * dataAccess.js
 * This file handles storing customer order data to localStorage.
 */


// Process and store customer information and order details

function processInfo(firstName, lastName, cell, email, qORc) {
	var order = createOrder();
	var dbString = stringify(firstName, lastName, cell, email, order, qORc);
	localStorage.setItem(cell, dbString);
}


// Convert customer and order information into a string format for storage

function stringify(firstName, lastName, cell, email, order, qORc) {
	var firstNameStr = 'firstName: ' + firstName;
	var lastNameStr = 'lastName: ' + lastName;
	var cellstr = 'cell: ' + cell;
	var emailstr = 'email: ' + email;
	var questionORconcerns = 'questions or concerns: ' + qORc;
	
	// Format the order array into a string
	var orderStr = 'order: [';
    for (var i = 0; i < order.length; i++) {
       
        var door = order[i];
        orderStr += '[' + door[0] + ', ' + door[1] + ', ' + door[2] + ', ' + door[3] + ']';
        if (i < order.length - 1) {
            orderStr += ', ';
        }
    }
    orderStr += ']';

	// Combine all data into a single string
	var dbStr = '{'+ firstNameStr + ',' + lastNameStr + ',' + cellstr + ',' + emailstr + ','  + orderStr;

	// Add questions/concerns if provided
	if (qORc != ''){
		dbStr += ',' + questionORconcerns;
	}

	dbStr += '}';

	return dbStr;	
}
