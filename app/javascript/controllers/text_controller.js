 // Write a controller for text inputs with a limited length. Warn a user when they are close or over the maximum character count (imagine a user writing a tweet which has a maximum length of 280 characters)

import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "field", "showlength" ];
  static values = { max: Number };
  static classes = [ "over" ];

  connect() {
    this.updatecounter();
  }

  updatecounter() {
    this.showlengthTarget.textContent = this.maxValue - this.fieldTarget.value.length + " characters left";
    if (this.fieldTarget.value.length > this.maxValue) {
      this.showlengthTarget.classList.add(this.overClass);
    } else {
      this.showlengthTarget.classList.remove(this.overClass);
    }
  }
}
