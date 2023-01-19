import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  static classes = ["hidden", "change", "hightlight"]; 
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
    let target = event.target.closest('div');
    target.classList.add(this.hiddenClass);
    this.hiddenelementTarget.classList.remove(this.hiddenClass);  
  }
  highlight(event) {
    console.log(event.target);
    let target = event.target.closest('div');
    console.log(target);
    target.classList.add(...this.hightlightClasses);
  }
}
