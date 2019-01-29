export class CarModel {
  brand: string;
  model: string;
  color: string;
  buildDate: DateTimeFormat;


  constructor(brand: string, model: string, color: string = null, buildDate: DateTimeFormat) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.buildDate = buildDate;
  }
}
