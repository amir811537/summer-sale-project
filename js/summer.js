const couponInput = document.getElementById("applycoupon");
const applyButton = document.getElementById("couponcodebtn");
const makePurchaseButton = document.getElementById("purchaseBtn");
let total = 0;
let discount = 0;

// SELL200 condition
couponInput.addEventListener("input", () => {
  if (couponInput.value === "SELL200") {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true);
  }
});

applyButton.addEventListener("click", () => {
  if (couponInput.value === "SELL200" && total >= 200) {
    discount = (total * 0.2).toFixed(2);
    const discountTxt = document.getElementById("discountTxt");
    discountTxt.innerText = discount + " TK";

    // Update final total after applying the discount
    const finalTotal = document.getElementById("finalTotal");
    finalTotal.innerText = (total - discount).toFixed(2) + " TK";
  } else {
    alert("Invalid coupon code or total not eligible for discount.");
  }
});

function handleCLikBtn(target) {
  const selectedItemsContainer = document.getElementById("selected-items");
  const itemName = target.querySelector("h3");
  const cardName = itemName.innerText;
  const li = document.createElement("li");
  li.innerText = cardName;
  selectedItemsContainer.appendChild(li);
  const priceText = target.querySelector("p").innerText;
  const price = parseFloat(priceText.split(" ")[0]); 

  total = total + price;
  const firstTotal = (document.getElementById("Total").innerText = total);
  const finalTotal = document.getElementById("finalTotal");
  finalTotal.innerText = total.toFixed(2) + " tk";

  // Enable "Have a coupon?" button when final total is 200 or more
  if (total >= 200) {
    const couponButton = document.getElementById("couponcodebtn");
    couponButton.removeAttribute("disabled");
  }

  // Enable "Make Purchase" button when total is 1 taka or more
  if (total >= 1) {
    makePurchaseButton.removeAttribute("disabled");
  }
}
