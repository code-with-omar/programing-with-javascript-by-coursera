let purchase1 = {
    shoes: 100,
    stateTax: 1.5,
    totalPrice: function () {
        let calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total Price :", calculation);
    }
}
purchase1.totalPrice();