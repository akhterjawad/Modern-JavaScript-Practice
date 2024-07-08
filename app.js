// // arrow function

// let a = arrow = item => {
//     console.log(`hello`, item);
//     // return `hello`,item

// }
// console.log(arrow('haseeb'));
// arrow(`jawad`)

// let value = 1000;
// let main = new Promise((resolve, reject) => {
//     if (value >= 1001) {
//         console.log('pass');
//         resolve()
//     } else {
//         console.log('fail');
//         reject()
//     }
// })
//     .then(() => {
//         console.log('then');
//     })
//     .catch(() => {
//         console.log('catch');
//     })
// jawad('ahmed')
//     function jawad(jj) {
//         console.log(`haseeb ${jj}`);
//     }

//     function hasnain (ok){

//         return `vip ${ok}`;
//     }
//     let ahmed = hasnain(`kamran`)
//     console.log(ahmed);

// //      nana=(chacha)=>{
// // console.log(`nana ${chacha} nani`);
// //     }
// //     nana('nawaisa')
// lemon =(smit)=>{
//     console.log(`JS${smit} `);
// }
// lemon(` practice`)


// jawad=()=>{ return 'kamran' }
// console.log(jawad);

let arrays = ['nashpati', ' apple', ' banana']
let div = document.querySelector('div')
// for (let i = 0; i < arrays.length; i++) {
// div.innerHTML+=`
// ${arrays[i]}
// `
// }


// for (const iterator of arrays) {
// //  div.innerHTML+=iterator   
// }


let ObjectMain = {
    name: 'jawad',
    age: 19
}
// for (const key in ObjectMain) {
//     div.innerHTML += ` ${key} => ${ObjectMain[key]},`
// }
// let arraymain=['haseeb','jawad','lemon']
// for (const iterator of arraymain) {
//  console.log(iterator);   
// }
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let mom = num.map(item => item)
console.log(mom);
let kamran = num.map((item, index,) => {
    return item, index
})
console.log(kamran);
let jawad = num.map((item) => {
    return item > 5
})
console.log(jawad);
let yaqwb = num.filter((item) => {
    return item > 5
})
console.log(yaqwb);

const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];
// let MainProducts = products.filter((item)=>{
//     return item.category==='Electronics'&&item.price>100;
// }).filter((item)=>{
//     return item.price<200;
// })
// console.log(MainProducts);

let MainProducts = products.filter((item) => {
    return item.category === "Electronics" && item.price > 100
}).filter((item) => {
    return item.price < 300
})
console.log(MainProducts);

var fruit = "mango";
switch (fruit) {
    case "apple":
        console.log("Apple is my favorite fruit.");
        break;

    case "anana":
        console.log("I love Bananas.");
        break;

    default:
        console.log("I don't like that fruit.");
}
let job = 4
let flight = new Promise((resolve, reject) => {
    if (job > 9) {
        console.log('if');
        // resolve()
    } else {
        console.log('else');
        // reject()
    }
})

let experience = 3
const exist = new Promise((resolve, reject) => {
    if (experience > 3) {
        console.log('accepted');
        resolve()
    } else {
        console.log('rejected');
        reject()
    }
})
exist
    .then(() => {
        console.log('then');
    })
    .catch(() => {
        console.log('catch');
    })


let e = 3; if (e > 3) { console.log('accept'); } else { console.log('reject'); }

console.log('localStorage');

//localStorage ka data setitem sa  jata hai or jub huma usko get karna ho to getitem sa ata ha jub hum data bhajta ha to paihla hum key likhta ha or dubara ma value ,key yani ka kis nam sa data bhajna ha or value yani ka kia data bhajna ha
// normaly value ko string ma likhta ha yani  ' ' lakin is ma hama patanahi chalta ka data kis form ma gia ha or jub hum koi variable ko localStorage ma bhajta ha to wo print hona ma masla karta ha isilia hum JSON.stringify lagata ha is sa data string ki form ma print hota ha

let m = {
    jawad: 'name',
    age: 20,
}
localStorage.setItem('key,abba', m)
localStorage.setItem('SendObject', JSON.stringify(m))

// jub huma data ko get karna ho to getitem sa karta ha
let k = () => console.log('hello')
k()

let l = () => {
    console.log('SMIT');
}

localStorage.setItem('key', JSON.stringify(m))
let data = JSON.parse(localStorage.getItem('key'))
console.log(data);
localStorage.setItem('key main', JSON.stringify(m));
let liaquat = JSON.parse(localStorage.getItem('key main'))
console.log(liaquat);

let NainTara = document.querySelector('h1')
NainTara.innerHTML='haseeb'
let main = document.querySelector('h2')
main.innerHTML='chain mara'

function late(name){
    console.log(name);
}
late('jawad')