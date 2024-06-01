// arrow function

let a = arrow = item => {
    console.log(`hello`, item);
    // return `hello`,item

}
console.log(arrow('haseeb'));
arrow(`jawad`)

let value = 1000;
let main = new Promise((resolve, reject) => {
    if (value >= 1001) {
        console.log('pass');
        resolve()
    } else {
        console.log('fail');
        reject()
    }
})
    .then(() => {
        console.log('then');
    })
    .catch(() => {
        console.log('catch');
    })