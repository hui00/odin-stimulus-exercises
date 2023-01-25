import { Controller } from "@hotwired/stimulus"
import { get } from "@rails/request.js"


// Connects to data-controller="car-selection"
export default class extends Controller {
  static targets = ["colorSelect"]


  selectmodel(event) {
    let brand = event.target.value 
    let target = this.colorSelectTarget.id
    get(`/pages/color?target=${target}&brand=${brand}`, {
      responseKind: "turbo-stream"
    })
  }
}
