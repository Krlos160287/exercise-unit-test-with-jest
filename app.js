// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

const fromDollarToYen = function(dollars) {
    var yens = dollars *110.05
    return (yens);
}


const fromEuroToDollar = function(euros){
    var dollars = euros *1.2
    return (dollars);
}


const fromYanToPound = function(yans){
    var pound = yans * 0.11
    return (pound);
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound};