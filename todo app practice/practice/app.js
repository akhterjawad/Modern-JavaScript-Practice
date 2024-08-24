let form = document.querySelector('#form')
let number = document.querySelector('#number')
let text = document.querySelector('#text')
let ul = document.querySelector('ul')
let array = [];
let object;

form.addEventListener('submit', event => {
    event.preventDefault()
    object = {
        amount: number.value,
        thing: text.value
    };
    array.push(object);
    renderscreen()
    console.log(number.value);
    console.log(text.value);

});

function renderscreen() {
    ul.innerHTML = ``;
    array.map((item, index) => {
        ul.innerHTML += `
    <li>
    amount ${item.amount}</br>
    thing ${item.thing}</br>
    <button onclick="deleted(${index})">delete</button>
    <button onclick="edit(${index})">edit</button>
    </li>
`
    });
};
function deleted(i) {
    array.splice(i, 1);
    renderscreen();
};
function edit(i) {
    let editvalue = + prompt(`number`);
    let editThing = prompt(`thing`);
    if (editThing !== ``) {
        array[i].thing = editThing
    }
    if (editvalue !== ``) {
        array[i].amount = editvalue
    }
    renderscreen();
}