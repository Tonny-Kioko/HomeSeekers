import { Controller } from "stimulus";
import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  static targets = ["dropdown", "button", "openUserMenu"];

  connect() {
    // Close dropdown when clicking outside
    document.addEventListener("click", this.closeDropdownOutside.bind(this));
  }

  disconnect() {
    document.removeEventListener("click", this.closeDropdownOutside.bind(this));
  }

  toggleDropdown(event) {
    // Toggle the hidden class on the dropdown element
    this.dropdownTarget.classList.toggle("hidden");
    event.stopPropagation(); // Prevent event bubbling
  }

  closeDropdownOutside(event) {
    // Close dropdown if clicked outside of the button and dropdown
    if (!this.element.contains(event.target)) {
      this.dropdownTarget.classList.add("hidden");
    }
  }
//   connect () {
//     this.openUserMenuTarget.addEventListener("click", (e)=> {
//       openDropdown(this.dropdownTarget)
//     })
//   }
// }

// function openDropdown(element) {
//   toggle(element).then(() => {
//     console.log("Enter transition complete")
//   })
// }

// function closeDropdown() {
//   leave(this.dropdownTarget).then(() => {
//       element.destroy();
//   })

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
