    // Calculate Money

function calculateMoney(ticketSale) {
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return `Ticket quantity must be a positive number`;
    }
    const ticketPrice = 120;
    const guardSalary = 500;
    const lunchFee = 50;
    const staffs = 8;

    const totalLunchFee = lunchFee * staffs;
    const totalRevenue = ticketPrice * ticketSale;
    const totalSalary = guardSalary + totalLunchFee;

    const result = totalRevenue - totalSalary;
    return result;
}


document.getElementById('calculateBtn').addEventListener('click', function() {
    const ticketSale = parseInt(document.getElementById('ticketSale').value);
    const resultElement = document.getElementById('result');
    
    const result = calculateMoney(ticketSale);
    resultElement.textContent = `Remaining money: ${result} Taka`;
});



    // 2. 