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
jawad('ahmed')
    function jawad(jj) {
        console.log(`haseeb ${jj}`);
    }

    function hasnain (ok){
        
        return `vip ${ok}`;
    }
    let ahmed = hasnain(`kamran`)
    console.log(ahmed);

//      nana=(chacha)=>{
// console.log(`nana ${chacha} nani`);
//     }
//     nana('nawaisa')
lemon =(smit)=>{
    console.log(`JS${smit} `);
}
lemon(` practice`)