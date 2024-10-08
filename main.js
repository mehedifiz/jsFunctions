function calculateMoney(ticketSale) {
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return "Invalid Number"; 
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



//checkName
function checkName() {
    const name = document.getElementById('nameInput').value;
    const nameResultElement = document.getElementById('nameResult');

    if (typeof name !== 'string' || !/^[a-zA-Z]+$/.test(name)) {
        nameResultElement.textContent = "invalid"; 
        return; 
    }

    const lowerName = name.toLowerCase();
    const badEndings = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastChar = lowerName.charAt(lowerName.length - 1);

    if(badEndings.includes(lastChar)) {
        nameResultElement.textContent = "Bad Name"; 
    }
    
    else {
    nameResultElement.textContent = "Good Name"; 
    }
}
            document.getElementById('checkNameBtn').addEventListener('click', checkName);


            //3

            function deleteInvalids(inputArray) {
                if (!Array.isArray(inputArray)) {
                    return "Invalid input, expected an array";
                }
            
                const res = inputArray.filter(item => !isNaN(item) && item !== undefined && item !== null);
            
                return res;
            }

            //4


            function password(userInfo) {
    if (!userInfo.name || !userInfo.birthYear || !userInfo.siteName) {
        return "invalid"; 
    }

    if (typeof userInfo.birthYear !== 'number' || userInfo.birthYear.toString().length !==  4) {
        return "invalid"; 
    }

          const { name, birthYear, siteName } = userInfo;
    return `${capitalize(siteName)}#${name}@${birthYear}`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}



// monthlySavings

function monthlySavings(payments, livingCost) {
    
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    const totalPayments = payments.reduce((acc, curr) => {
        if (typeof curr !== 'number') {
            return NaN; 
        }
        return acc + curr;
    }, 0);

    
    if (isNaN(totalPayments)) {
        return "invalid input";
    }

    
    const savings = totalPayments - livingCost;

    
    if (savings > 0) {
        return savings;
    } else {
        return "earn more";
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));  
