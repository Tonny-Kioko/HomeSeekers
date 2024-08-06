import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  }

  toggleReviewsModal() {
    document.getElementById("reviews").click();
  }
}


// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   connect() {
//     console.log("Booking controller connected");

//   }

//   // rest of your code...
// }
