export class CarModel {
  brand: string;
  model: string;
  color: string;
  buildDate: Date;


  constructor(brand: string, model: string, color: string = null, buildDate: Date) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.buildDate = buildDate;
  }
}
