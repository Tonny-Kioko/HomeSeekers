import { Controller } from "@hotwired/stimulus";
import { enter, leave, toggle, transition, html, css } from 'el-transition'; // Use the package name

// export default class extends Controller {
//   static targets = ["dropdown", "button", "openUserMenu"];

//   connect() {
//     document.addEventListener("click", this.closeDropdownOutside.bind(this));
//   }

//   disconnect() {
//     document.removeEventListener("click", this.closeDropdownOutside.bind(this));
//   }

//   toggleDropdown(event) {
//     event.stopPropagation(); // Prevent event bubbling

//     // Toggle the hidden class on the dropdown element using el-transition
//     toggle(this.dropdownTarget, {
//       enter: 'transition ease-out duration-100 transform opacity-0 scale-95',
//       enterTo: 'transform opacity-100 scale-100',
//       leave: 'transition ease-in duration-75 transform opacity-100 scale-100',
//       leaveTo: 'transform opacity-0 scale-95',
//     });
//   }

//   closeDropdownOutside(event) {
//     if (!this.element.contains(event.target)) {
//       this.dropdownTarget.classList.add("hidden");
//     }
//   }
// }

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
