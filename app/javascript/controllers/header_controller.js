import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {

  static targets =['dropdown', 'openUserMenu']

  connect () {
    this.openUserMenuTarget.addEventListener("click", (e)=> {
      openDropdown(this.dropdownTarget)
    })
  }
}

function openDropdown(element) {
  toggle(element).then(() => {
    console.log("Enter transition complete")
  })
}

function closeDropdown() {
  leave(this.dropdownTarget).then(() => {
      element.destroy();
  })
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
