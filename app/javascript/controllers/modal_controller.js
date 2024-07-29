import { Controller } from "@hotwired/stimulus"
import {toggle} from 'el-transition'

export default class extends Controller {
  connect () {
  }

  toggleModal(){
    const modalTriggerId = this.element.dataset.modalTriggerId;
    console.log("modalTriggerId: ", modalTriggerId)
    console.log("wrapper: " + document.getElementById(`modal-${modalTriggerId}-wrapper`))
    toggle(document.getElementById(`modal-${modalTriggerId}-wrapper`));
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