const couponInput = document.getElementById("applycoupon");
  const applyButton = document.getElementById("couponcodebtn");

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