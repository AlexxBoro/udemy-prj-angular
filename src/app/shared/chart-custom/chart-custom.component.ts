import { Component, Input, OnChanges, EventEmitter, TemplateRef, ContentChild } from '@angular/core';
// import { BaseChartComponent, ColorHelper } from 'ngx-charts';
import { BaseChartComponent, ColorHelper } from '@swimlane/ngx-charts';
import * as d3 from 'd3';
import { calculateViewDimensions } from '@swimlane/ngx-charts';
import { DataItem } from '@swimlane/ngx-charts';

@Component({
  selector: 'custom-chart',
  templateUrl: './chart-custom.component.html',
  styleUrls: ['./chart-custom.component.scss']
})
export class CustomChartComponent extends BaseChartComponent implements OnChanges {
  dims: any;
  xScale: any;
  yScale: any;
  xDomain: any;
  yDomain: any;
  colors: ColorHelper;
  // colorScheme: any = 'cool';
  colorScheme: any = {
    domain: [ '#C7B42C', '#A10A28' ]
  };
  labels = false;
  trimLabels = true;
  translation: string;
  margins: number[];
  activeEntries: any[] = [];

  @Input() view;
  @Input() results;
  activate: EventEmitter<any> = new EventEmitter();
  dblclick = new EventEmitter();
  deactivate: EventEmitter<any> = new EventEmitter();

  innerRadius: number;
  outerRadius: number;
  doughnut = false;
  arcWidth = 0.25;
  explodeSlices = false;
  gradient = false;
  tooltipDisabled = false;
  tooltipText: any;
  legend = false;
  legendOptions: any;
  // domain: any;

  @ContentChild('tooltipTemplate', { static: false }) tooltipTemplate: TemplateRef<any>;
  gradientStops: any[];

  ngOnChanges() {
    this.update();
    const values = this.results.map(d => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    console.log("this.colors ", this.colors);
    console.log(min, max);
    this.gradientStops = this.colors.getLinearGradientStops(max, min);
    this.gradientStops = [
      {
    color: "#A10A28",
    offset: 30,
    opacity: .4,
    originalOffset: 20
    },
      {
    color: "#ccc",
    offset: 70,
    opacity: .7,
    originalOffset: 60
    }
  ];
    console.log("gradientStops ", this.gradientStops);

}

  update() {
    super.update();
    this.dims = {
      width: this.width,
      height: this.height
    };
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();

    if (this.labels && this.hasNoOptionalMarginsSet()) {
      this.margins = [30, 80, 30, 80];
    } else if (!this.labels && this.hasNoOptionalMarginsSet()) {
      // default value for margins
      this.margins = [20, 20, 20, 20];
    }

    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margins,
    });

    const xOffset = this.margins[3] + this.dims.width / 2;
    const yOffset = this.margins[0] + this.dims.height / 2;
    this.translation = `translate(${xOffset}, ${yOffset})`;

    this.outerRadius = Math.min(this.dims.width, this.dims.height);
    if (this.labels) {
      // make room for labels
      this.outerRadius /= 3;
    } else {
      this.outerRadius /= 2;
    }
    this.innerRadius = 0;
    if (this.doughnut) {
      this.innerRadius = this.outerRadius * (1 - this.arcWidth);
    }
    // this.domain = this.getDomain();

    // sort data according to domain
    // this.data = this.results.sort((a, b) => {
    //   return this.domain.indexOf(a.name) - this.domain.indexOf(b.name);
    // });

    // this.legendOptions = this.getLegendOptions();
  }

  getXScale() {
    const spacing = 0.2;
    this.xDomain = this.getXDomain();
    return d3.scaleBand()
      .rangeRound([0, this.dims.width])
      .paddingInner(spacing)
      .domain(this.xDomain);
  }
  getYScale() {
    this.yDomain = this.getYDomain();
    return d3.scaleLinear()
      .range([this.dims.height, 0])
      .domain(this.yDomain);
  }
  getXDomain() {
    return this.results.map(d => d.name);
  }
  getYDomain() {
    let values = this.results.map(d => d.value);
    let min = Math.min(0, ...values);
    let max = Math.max(...values);
    return [min, max];
  }
  onClick(data: DataItem): void {
    this.select.emit(data);
  }

  setColors() {
    this.colors = new ColorHelper(this.colorScheme, 'ordinal', this.xDomain);
  }

  // getLegendOptions() {
  //   return {
  //     scaleType: 'ordinal',
  //     domain: this.domain,
  //     colors: this.colors,
  //     title: this.legendTitle,
  //     position: this.legendPosition
  //   };
  // }

  onActivate(item, fromLegend = false) {
    item = this.results.find(d => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });

    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }

    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(item, fromLegend = false) {
    item = this.results.find(d => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
  }

  private hasNoOptionalMarginsSet(): boolean {
    return !this.margins || this.margins.length <= 0;
  }
}
