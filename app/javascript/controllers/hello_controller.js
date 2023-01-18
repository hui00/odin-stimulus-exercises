import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static classes = ["hidden", "change"];
  static targets = ["text"];

  connect() {}

  toggle() {
    // only works with one class
    this.textTarget.classList.toggle(this.hiddenClass);
  }

  add() {
    this.textTarget.classList.add(...this.changeClasses);
  }
  remove() {
    this.textTarget.classList.remove(...this.changeClasses);
  }
}
