//complete the functions below to make this system operational.

let dmvQueue = [];

function addCustomer() {
	let name = prompt("Welcome to the DMV! What is your name?");
	
	dmvQueue.push(name);
	alert("Customer " + name + " has been added to the queue.");
}

function callNextCustomer() {
	if (dmvQueue.length > 0) {
			let nextCustomer = dmvQueue.shift()
		// use the shift method to remove the first person in the 
		//array, and assign this method to a variable called 
		//"nextCustomer".
		alert("Now serving customer: " + nextCustomer);
	} else {
		alert("The queue is currently empty.");
	}
}

function displayQueue() {
	if (dmvQueue.length > 0) {
		alert(dmvQueue.join(', '))
		// create an alert message that uses the join method to 
		//display the list of people currently waiting in the queue.
	} else {
		alert("The queue is currently empty.");
	}
}
