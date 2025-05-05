
const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = GENERAL_ADMISSION_TICKET_COST;

    if ((age <= 12) || (age >= 65)) {
        cost = CHILD_AND_SENIOR_TICKET_COST
    }
    alert("Your ticket will cost: $" +cost)

}
