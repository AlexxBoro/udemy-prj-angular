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
// import { CustomChartComponent } from './shared/chart-custom/chart-custom.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent
    // CustomChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
  // providers: [LoggingService]
})
export class AppModule { }
