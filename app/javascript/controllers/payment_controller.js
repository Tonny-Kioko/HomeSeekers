import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["stripe-form", "mobile-money-form"];

  connect() {
    this.stripeFormTarget = document.getElementById("stripe-form");
    this.mobileMoneyFormTarget = document.getElementById("mobile-money-form");
  }

  togglePaymentOption(event) {
    const selectedMethod = event.target.value;

    if (selectedMethod === "stripe") {
      this.stripeFormTarget.classList.remove("hidden");
      this.mobileMoneyFormTarget.classList.add("hidden");
    } else if (selectedMethod === "mobile_money") {
      this.stripeFormTarget.classList.add("hidden");
      this.mobileMoneyFormTarget.classList.remove("hidden");
    }
  }
}


// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   connect() {
//     console.log("Payment controller connected");

//   }

//   // rest of your code...
// }
