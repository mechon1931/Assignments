
const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = getBaseTicketCost(age);
    const isMatinee = prompt("Are you attending a matinee show?");
    cost = getMatineeDiscount(cost, isMatinee);

    alert("Your ticket will cost: $" + cost)

}

function getBaseTicketCost(age) {
    if (age < 0 ) {
        return "You cannot have negative age numbers!!! Please ENTER A POSITIVE NUMBER";
    } else if (typeof age != "number" || isNaN(age)) {
        return 'Please enter a valid number';
    } else if ((age <= 12) || (age >= 65)) {
        return CHILD_AND_SENIOR_TICKET_COST
    } else {
        return GENERAL_ADMISSION_TICKET_COST;
    }
    
}

function getMatineeDiscount(cost, isMatinee) {
    isMatinee = isMatinee.toLowerCase();

    if((isMatinee === "yes" || isMatinee === "y")) {
        return cost = cost - MATINEE_DISCOUNT;
    }

    return cost
}
