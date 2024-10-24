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

    
 
;



//checkName
function checkName(name){
    if(typeof name !== "string"){
        return 'invalid';
    }
    else{
        const check = name.toLowerCase();
        const last = check.slice(-1);
        if(last === 'a' || last === 'y' || last === 'i' || last === 'e' || last === 'o' || last === 'u' || last === 'w'){
            return 'Good Name';
        }
        return 'Bad Name' ;
    }
}

const name1 = checkName('Salman');
console.log(name1);
const name2 = checkName('RAFEE');
console.log(name2);
const name3 = checkName('Jhankar');
console.log(name3);
const name4 = checkName(199);
console.log(name4);
const name5 = checkName(["Rashed"]);
console.log(name5);



            //3

            function deleteInvalids(inputArray) {
     if (!Array.isArray(inputArray)) {
                    return "please input  an array";
                }
            
                const res = inputArray.filter(item => !isNaN(item) && item !== undefined && item !== null && typeof item === 'number');
            
                return res;
            }

 const inputArray =['1' , {num:2} , NaN ] ;
const result = deleteInvalids(inputArray);

console.log('delete inalids console',result);    





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

    const totalPayments = payments.reduce((sum, value) => {
        if (typeof value !== 'number') {
            return NaN; 
        }
        return sum + value;
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

console.log('sd',monthlySavings([900, 2700, 3700], 10000)); 
