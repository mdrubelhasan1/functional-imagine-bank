



document.getElementById('btn-diposit').addEventListener('click',function(){
    const newDipositAmount = getInputFieldValueById('diposit-field');
    // 1. get previous diposite total:
    const previousDipositTotal = getTextElementValueById('diposite-total');
    console.log(newDipositAmount);
    // calculate new diposite total:
    const newdipositTotal = previousDipositTotal + newDipositAmount;
// set diposite total value
setTextElementValueById('diposite-total', newdipositTotal);

// get previous balance using function:
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDipositAmount;
setTextElementValueById('balance-total',newBalanceTotal);
    
});