import { Controller } from "@hotwired/stimulus"
// import { get } from "@rails/request.js"


// Connects to data-controller="car-selection"
export default class extends Controller {


  toggle() {
    console.log("toggle")
    // only works with one class
  }
}
