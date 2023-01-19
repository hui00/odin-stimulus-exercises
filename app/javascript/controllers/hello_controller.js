import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  static classes = ["hidden", "change"];
  static targets = ["text", "dropdown", "hiddenelement"];
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

  dropdowntoggle() {
    this.dropdownTarget.classList.toggle(this.hiddenClass);
  }

  hideandshow(event) {
    // hide option 1 and show option 4
    event.target.classList.add(this.hiddenClass);
    this.hiddenelementTarget.classList.remove(this.hiddenClass);  
  }
}
