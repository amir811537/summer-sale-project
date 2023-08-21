const couponInput = document.getElementById("applycoupon");
const applyButton = document.getElementById("couponcodebtn");
const discountButton = document.getElementById("applydiscount");

// SELL200 condition
couponInput.addEventListener("input", () => {
  if (couponInput.value === "SELL200") {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true);
  }
});

applyButton.addEventListener("click", () => {
  if (couponInput.value === "SELL200") {
    alert("Coupon applied successfully!");
  } else {
    alert("Invalid coupon code. Please enter a valid code.");
  }
});

let total=0;
function handleCLikBtn(target) {
  const selectedItemsContainer = document.getElementById('selected-items');
  const itemName = target.querySelector('h3');
  const cardName = itemName.innerText;
  const li = document.createElement('li');
  li.innerText = cardName;
  selectedItemsContainer.appendChild(li);
  const priceText = target.querySelector('p').innerText; // e.g., "39.00 TK"
  const price = parseFloat(priceText.split(" ")[0]); // Extract the numeric part
  total = total + price;
 const firstTotal =document.getElementById('Total').innerText=total;
 





  }



