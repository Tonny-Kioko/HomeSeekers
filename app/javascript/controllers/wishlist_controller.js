import { Controller } from "@hotwired/stimulus"



export default class extends Controller {

  updateWishlistStatus() {

    const isUserLoggedIn = this.element.dataset.userLoggedIn:
    if (isUserLoggedIn == false){
      document.getElementById("wishlist-login").click();
      return
    }

    if (this.element.dataset.status === "false"){
      this.element.classList.remove("fill-none");
      this.element.classList.add("fill-primary");
      this.element.dataset.status = "true";
    }
    else {
      this.element.classList.remove("fill-primary");
      this.element.classList.add("fill-none");
      this.element.dataset.status = "false";
    }
  }
}


// export default class extends WishlistController {
//   connect() {
//    console.log("Wishlist controller connected");

//   }
// }
