'use strict';


let onePriceDollar = 26;
for (let manyDollars = 10; manyDollars >= 10 && manyDollars <= 100; manyDollars += 10) {
    const result = manyDollars * onePriceDollar;
    console.log(`${manyDollars} долларов = ${result} гривен`);
}               // основа, через for проще


// let onePriceDollar  = 26;
// let manyDollars = 0;
// do {                                            // цикл з писляумовою, это я для себя
//     manyDollars += 10;
//     let result = manyDollars * onePriceDollar;
//     console.log(`${manyDollars} долларов = ${result} гривен`);
// }
// while (manyDollars >= 0 && manyDollars < 100);
//             // для теста


// const onePriceDollar = 26;
// let manyDollars = 0;
// while (manyDollars >= 0 && manyDollars < 100) {                // цикл з передумовою
//     manyDollars += 10;
//      const result = onePriceDollar * manyDollars;
//     console.log(`${manyDollars} долларов = ${result} гривен`);
// }           // для теста