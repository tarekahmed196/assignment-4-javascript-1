// // problem 2
// /*
// shirtPrice =100tk/shirt
// pantPrice =200tk/pant
// shoePrice = 500tk/shoe
// */

// function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
//     if (typeof (shirtQuantity) != NaN && shirtQuantity >= 0 && typeof (pantQuantity) != NaN && pantQuantity >= 0 && typeof (shoeQuantity) != NaN && shoeQuantity >= 0) {
//         const perShirtPrice = 100;
//         const perPantPrice = 200;
//         const perShoePrice = 500;
//         // product calculation
//         const shirtProductQuantity = shirtQuantity * perShirtPrice;
//         const pantProductQuantity = pantQuantity * perPantPrice;
//         const shoeProductQuantity = shoeQuantity * perShoePrice;

//         // adding all product quantity
//         const totalProduct = shirtProductQuantity + pantProductQuantity + shoeProductQuantity;
//         return totalProduct;
//     }
//     else {
//         return 'Number is invalid';
//     }



// }
// const firstOption = totalSales(8, -2, 1);
// console.log(firstOption);

// const names = ['sumon', 'Ahsan', 'Samiul', 'Habibur', 'Mizanur'];

// function perfectFriend(names) {
//     for (const element of names) {
//         if (element.length == 5) {
//             return element;
//         }
//     }

// }
// const uniqueNames = perfectFriend(names);
// console.log(uniqueNames);

// function seerToMon(seer) {
//     if (typeof (seer) != NaN && seer >= 0) {
//         var mon = seer / 40;
//         return mon;
//     }
//     else {
//         return 'Number is invalid';
//     }

// }
// console.log(seerToMon(120));

function deliveryCost(quantity) {
    if (typeof (quantity) != NaN && quantity >= 0) {
        const tshirtChargeForfirst100 = 100;
        const tshirtChargeForSecond100 = 80;
        const tshirtChargeFor300plus = 50;
        if (quantity <= 100) {
            const count = quantity * tshirtChargeForfirst100;
            return count;
        }
        else if (quantity <= 200) {
            const firstRangesTshirt = 100 * tshirtChargeForfirst100;
            const restQuantity = quantity - 100;
            const secondRangesTshirt = restQuantity * tshirtChargeForSecond100;
            const totalQuantity = firstRangesTshirt + secondRangesTshirt;
            return totalQuantity;
        }
        else {
            const firstRangesTshirt = 100 * tshirtChargeForfirst100;
            const secondRangesTshirt = 100 * tshirtChargeForSecond100;
            const restQuantity = quantity - 200;
            const lastQuantity = restQuantity * tshirtChargeFor300plus;
            const totalQuantity = firstRangesTshirt + secondRangesTshirt + lastQuantity;
            return totalQuantity;
        }
    }



    else {
        return 'Number is invalid';
    }

}
const shippingCost = deliveryCost(201);
console.log(shippingCost);