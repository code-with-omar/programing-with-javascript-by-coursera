// use this keyword 
let purchase1 = {
    shoes: 100,
    stateTax: 1.5,
    totalPrice: function () {
        let calculation = this.shoes * this.stateTax;
        console.log("Total Price :", calculation);
    }
}
purchase1.totalPrice();