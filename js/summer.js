const couponInput = document.getElementById("applycoupon");
const applyButton = document.getElementById("couponcodebtn");
const discountButton = document.getElementById("applydiscount");
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
    let discountTxt = document.getElementById("discountTxt");
    discount = (total * 0.2).toFixed(2);
    discountTxt.innerText = discount + " TK";

    // Update final total after applying the discount
    const finalTotal = document.getElementById("finalTotal");
    finalTotal.innerText = total - discount + " TK";
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
  const priceText = target.querySelector("p").innerText; // e.g., "39.00 TK"
  const price = parseFloat(priceText.split(" ")[0]); // Extract the numeric part

  total = total + price;

  const firstTotal = (document.getElementById("Total").innerText = total);
  const finalTotal = document.getElementById("finalTotal");
  finalTotal.innerText = total + " tk";

  if (total >= 200) {
    let purchaseBtn = document.getElementById("purchaseBtn");
    purchaseBtn.disabled = false;
  }
}
