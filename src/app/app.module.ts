import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import { ChartComponent } from './shared/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CustomChartComponent } from './shared/chart-custom/chart-custom.component';
import { ChartWithChartJSComponent } from './shared/chart-with-chartjs/chart-with-chartjs.component';
import { ChartsModule } from 'ng2-charts';

// import { PieChartSwimlaneGhComponent } from './shared/piechart-swimlane-gh/piechart-swimlane-gh.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    CustomChartComponent,
    ChartWithChartJSComponent
    // PieChartSwimlaneGhComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  bootstrap: [AppComponent]
  // providers: [LoggingService]
})
export class AppModule { }
