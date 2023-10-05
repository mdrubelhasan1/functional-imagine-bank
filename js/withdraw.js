// step -1. AddEventListener to the withdraw button:

document.getElementById('btn-withdraw').addEventListener('click',function(){
    
// step-2. get withdraw amount by using getInputFieldValueById function:
const newWithdrawAmount = getInputFieldValueById('withdraw-field');
console.log(newWithdrawAmount);

// step-3. get previous withdraw amount by using getTextElementValueById function:
const previousWithDrawTotal = getTextElementValueById('withdraw-total');

// step-4. calculate new withdraw total and set the value:
const newWithdrawTotal = previousWithDrawTotal + newWithdrawAmount;
// step-4.5 set new withdraw total by using setTextElementValueById function:
setTextElementValueById('withdraw-total',newWithdrawTotal);

// step-5 get previous balance total by using getTextElementById function:
const previousBalanceTotal = getTextElementValueById('balance-total');

// step-6 calculate new balance total
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

// step-7 set balance total using setTextElementValueById:
setTextElementValueById('balance-total',newBalanceTotal);
})