import { Controller } from "@hotwired/stimulus";
import { toggle } from 'el-transition';

export default class extends Controller {
  connect() {
    console.log("Modal controller connected");
  }

  toggleModal() {
    const modalTriggerId = this.element.dataset.modalTriggerId;
    const modalElement = document.getElementById(`modal-${modalTriggerId}-wrapper`);

    if (modalElement) {
      console.log("Modal element found:", modalElement);
      toggle(modalElement);
    } else {
      console.error(`Element with id 'modal-${modalTriggerId}-wrapper' not found`);
    }
  }
}



// app/javascript/controllers/header_controller.js
// import { Controller } from "stimulus";

// export default class extends Controller {
//   connect() {
//     console.log("Header controller connected");
//     document.addEventListener("click", this.closeDropdownOutside.bind(this));
//   }

//   // rest of your code...
// }