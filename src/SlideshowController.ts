import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide", "index" ];
  static values = { index: Number };

  next(): void {
    if (this.indexValue < this.slideTargets.length - 1) {
      this.indexValue++;
    }
  }

  previous(): void {
    if (this.indexValue > 0) {
      this.indexValue--;
    }
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide(): void {
    this.slideTargets.forEach((element: HTMLElement, index) => {
      element.hidden = index !== this.indexValue;
    });

    if (this.hasIndexTarget) {
      this.indexTarget.innerHTML = `${this.indexValue + 1}`;
    }
  }
}
