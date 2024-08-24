let div = document.querySelector('.container')
let h1 = document.querySelector('h1')
let getdata = JSON.parse(localStorage.getItem(`sanddata`));
let total=0;
console.log(getdata);
if (getdata && getdata.length > 0) {
    function randerscreen() {
        getdata.map((item, index) => {
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
                h1.innerHTML+=total
    };
    
}else{
    h1.innerHTML=`0`
}
randerscreen()