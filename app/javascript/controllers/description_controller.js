import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Description controller connected");
  }

  toggleDescriptionModal() {
    document.getElementById("description").click();
  }
}