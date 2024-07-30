app/javascript/controllers/header_controller.js
import { Controller } from "stimulus";



export default class extends Controller {
  static targets = ["numberOfNights", "totalAmount", "serviceFee", "totalAmount"]

  SERVICE_FEE = 0.18
  connect() {
    const perNightPrice = this.element.dataset.perNightPrice;
    this.updateDetails();

  }

  updateDetails(){
    this.numberOfNightsTarget.textContent = this.numberOfNights();
    this.baseFareTarget.textContent = this.calculateBaseFare();
    this.serviceFeeTarget.textContent = this.calculateServiceFee();
    this.totalAmountTarget.textContent = this.calculateTotalAmount();
  }
  numberOfNights (){
    return 4;
  }

  calculateBaseFare(){
    return parseFloat(this.numberOfNights() * this.element.dataset.perNightPrice).toFixed(2);
  }

  calculateServiceFee(){
    return parseFloat(this.calculateBaseFare() * this.SERVICE_FEE).toFixed(2);
  }

  calculateTotalAmount(){
    return parseFloat(this.calculateBaseFare() + this.calculateServiceFee()).toFixed(2);
  }


}


// export default class extends Controller {
//   connect() {
//     console.log("Header controller connected");

//   }

// }
