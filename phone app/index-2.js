let getData = JSON.parse(localStorage.getItem('SendData'));
console.log(getData);
let div = document.querySelector(`.products`);
let h1 = document.querySelector(`.h1`);
let totalcost = document.querySelector(`.total`);
function randerScreen() {
    let total=0;
    div.innerHTML = ``;
    if (getData && getData.length > 0) {
        getData.map((item, index) => {
            total += item.price * item.quantity
            div.innerHTML += `<div class="rounded border card-width p-2">
                <div class="text-center p-2">
                    <img src="${item.img}" class="card-img-width" alt="no image">
                </div>
                <p class="mt-1 mb-2">${item.brand} ${item.model}</p>
                <h4>Price: ${item.price * item.quantity}</h4>
                <h5>Quantity:
                    <button class="btn btn-primary" onclick="addQuantity(${index})">+</button>
                    ${item.quantity}
                    <button class="btn btn-primary" onclick="lessQuantity(${index})">-</button>
                </h5>
                <div class="fw-lighter wrap1 d-flex align-items-center justify-content-between">
                    <div>
                        <p><strike class="strike1 mt-3">
                            <sup class="strike2">RS</sup>
                            <span class="strike2">8,000</span>
                        </strike></p>
                    </div>
                    <div>
                        <button type="button" onclick="deleteItem(${index})" class="btn card-button-font-size btn-outline-success mb-2">Delete</button>
                    </div>
                </div>
            </div>`
        });
        totalcost.innerHTML = `$${total}`;
    } else {
        h1.innerHTML = `no item found`
        totalcost.innerHTML = ``;
    }
}
randerScreen();

function deleteItem(index) {
    getData.splice(index, 1);
    updateLocalstorage()
    randerScreen();
    console.log(`delete`, index);

};
function addQuantity(index) {
    getData[index].quantity += 1;
    console.log(`add`, index);
    updateLocalstorage()
    randerScreen();
};
function lessQuantity(index) {
    if (getData[index].quantity == 1) {
        getData.splice(index, 1);
        console.log(`delete`, index);
    } else {
        getData[index].quantity -= 1;
        console.log(`less`, index);
    }
    updateLocalstorage()
    randerScreen();
}
function updateLocalstorage() {
    localStorage.setItem(`SendData`, JSON.stringify(getData))
}