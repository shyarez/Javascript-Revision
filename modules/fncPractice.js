// BMI calculator

function BMI(weight,height){
    return weight / (height*height)
}
console.log(BMI(40,1.5).toFixed(2));

// Reusable discount calculator
function discountCalculator(discount){
    return function(price){
          return price - price * (discount/100);
    }
}
let discounter = discountCalculator(10);
console.log(discounter(200));

// 