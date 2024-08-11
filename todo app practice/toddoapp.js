let form = document.querySelector('#form');
let thing = document.querySelector('#value');
let price = document.querySelector('#price');
let ul = document.querySelector('ul');
let array = [];
let object;
form.addEventListener('submit', event => {
    event.preventDefault();
    object = {
        mainThing: thing.value,
        mainPrice: price.value
    }
    array.push(object);
    randerscreen()
    console.log(thing.value);
    console.log(price.value);
});
function randerscreen() {
    ul.innerHTML = ``;
    array.map((item, index) => {
        ul.innerHTML += `
<li>Thing: ${item.mainThing}</br>Price: ${item.mainPrice}
<button onclick="deleted(${index})">delete</button>
<button onclick="edit(${index})">edit</button>
</li>
`
    });
};

function deleted(i) {
    array.splice(i, 1);
    randerscreen();
};
function edit(i) {
    let value = prompt(`enter your thing`)
    let price =+ prompt(`enter your price`)
    if (value!==``) {
        array[i].mainThing = value
    }
    if (price!==``) {
        array[i].mainPrice = price
    }
    randerscreen();
};