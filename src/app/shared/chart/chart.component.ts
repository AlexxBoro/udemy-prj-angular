import { Component } from '@angular/core';

@Component({
  selector: "chart",
  templateUrl: "./chart.component.html",
  styleUrls: [ "./chart.component.scss" ]
})
export class ChartComponent {

  public single = [
    {
      "name": "Zrealizowane",
      "value": 76
    },
    {
      "name": "Odrzucone",
      "value": 8
    }
  ];

  colorScheme = {
    domain: [ '#A10A28', '#C7B42C' ]
  };
  // colorScheme = {
  //   domain: [ '#fff' ]
  // };

  public onSelect(event) {
    console.log("selected ", event);
  }
}
