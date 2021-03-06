

function getElement(elementId) {
     return document.getElementById(elementId);
}

function getPrice(priceFieldNumber) {
     const fieldPriceNumber = getElement(priceFieldNumber);
     const price = parseFloat(fieldPriceNumber.innerText);
     return price;
}

// set price
function setButtonPrice(setPriceButtonId, setpriceFieldId) {
     const buttonPrice = getElement(setPriceButtonId);
     const fieldPrice = getElement(setpriceFieldId);
     buttonPrice.addEventListener('click', function () {
          const priceValue = buttonPrice.value;
          fieldPrice.innerText = priceValue;
          totalPrice();
     });
}

// function for calculation
function totalPrice() {
     const fixedPrice = getPrice('fixed-price');
     const memoryCost = getPrice('extra-memory-cost');
     const storageCost = getPrice('extra-storage-cost');
     const deliveryCost = getPrice('extra-delivery-cost');

     const semiTotalPrice = fixedPrice + memoryCost + storageCost + deliveryCost;

     const semiTotalPriceField = getElement('semi-total-price');
     semiTotalPriceField.innerText = semiTotalPrice;

     const totalPrice = getElement('total-price');
     totalPrice.innerText = semiTotalPrice;

     return semiTotalPrice;
}

// function call
setButtonPrice('memory-eight', 'extra-memory-cost');
setButtonPrice('memory-sixteen', 'extra-memory-cost');
setButtonPrice('storage-first', 'extra-storage-cost');
setButtonPrice('storage-seceond', 'extra-storage-cost');
setButtonPrice('storage-third', 'extra-storage-cost');
setButtonPrice('delivery-free', 'extra-delivery-cost');
setButtonPrice('delivery-paid', 'extra-delivery-cost');

