import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

export default class extends Controller {
  static targets = ["baseFare", "checkin", "checkout", "numberOfNights", "serviceFee", "totalAmount"]
  static values = { blockedDates: Array, perNightPrice: Number };

  SERVICE_FEE_PERCENTAGE  = 0.18;

  disabledDates = [];

  connect() {
    this.formatBlockedDates();

    flatpickr(this.checkinTarget, {
      minDate: new Date().fp_incr(1),
      disabled: this.disabledDates,
      onChange: (selectedDates, dateStr, instance) => {
        this.triggerCheckoutDatePicker(selectedDates);
      },
    });

    this.updateDetails();
  }

  triggerCheckoutDatePicker(selectedDates){
    flatpickr(this.checkoutTarget, {
      minDate: new Date(selectedDates).fp_incr(1),
      disabled: this.disabledDates,
      onChange: (selectedDates, dateStr, instance) => {
        this.updateDetails();
      },
    });

    this.checkoutTarget.click();
  }

  formatBlockedDates() {
    if (this.hasBlockedDatesValue) {
      const blockedDates = this.blockedDatesValue;
      for(let i = 0; i < blockedDates.length; i++){
        const dates = blockedDates[i];
        this.disabledDates.push({
          from: dates[0], // checkin-date
          to: dates[1], // checkout-date
        });
      }
    }
  }

  updateDetails(){
    const nightsCount = this.numberOfNights;
    const baseFare = this.calculateBaseFare(nightsCount);
    const serviceFee = this.calculateServiceFee(baseFare);
    const totalAmount = this.calculateTotalAmount(baseFare, serviceFee);

    this.numberOfNightsTarget.textContent = nightsCount;
    this.baseFareTarget.textContent = baseFare;
    this.serviceFeeTarget.textContent = serviceFee;
    this.totalAmountTarget.textContent = totalAmount;
  }

  get numberOfNights() {
    const checkinDate = new Date(this.checkinTarget.value);
    const checkoutDate = new Date(this.checkoutTarget.value);
    return (checkoutDate - checkinDate)/ (1000 * 60 * 60 * 24);
  }

  calculateBaseFare(nightsCount) {
    return parseFloat((nightsCount * this.element.dataset.perNightPrice).toFixed(2));
  }

  calculateServiceFee(baseFare) {
    return parseFloat((baseFare * this.SERVICE_FEE_PERCENTAGE).toFixed(2));
  }

  calculateTotalAmount(baseFare, serviceFee) {
    return parseFloat((baseFare + serviceFee).toFixed(2));
  }

  reserveProperty(e) {
    e.preventDefault();

    const paramsData = {
      checkin_date: this.checkinTarget.value,
      checkout_date: this.checkoutTarget.value,
    };
    const paramsURL = new URLSearchParams(paramsData).toString();

    const baseURL = e.target.dataset.reservePropertyUrl;

    Turbo.visit(`${baseURL}?${paramsURL}`);
  }
}



// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   connect() {
//     console.log("Booking controller connected");

//   }

//   // rest of your code...
// }
