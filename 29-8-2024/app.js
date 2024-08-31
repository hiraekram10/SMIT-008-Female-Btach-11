var plan1 = {
 name: "Basic",
 price: 3.99,
 space: 100,
 transfer: 1000,
 pages: 10,
 discountMonths: [6, 7],
 bestPrice:{},
 calcAnnual: function(percentIfDisc) {
 var bestPrice = this.price;
     var currDate = new Date();
     var thisMo = currDate.getMonth();
     for (var i = 0; i < this.discountMonths.length; i++) {
     if (this.discountMonths[i] === thisMo) {
     bestPrice = this.price * percentIfDisc;
     break;
     }
     }
     this.bestPrice= bestPrice;
     return bestPrice * 12;
     }
     };
     plan1.totalPrice= plan1.calcAnnual(20);
     console.log(plan1);

     var listOfProperties = [];
 for (var prop in plan1) {
 listOfProperties.push(prop);
 }
 console.log(listOfProperties);