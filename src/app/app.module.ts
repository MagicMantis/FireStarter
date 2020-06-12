import { MatComponentsModule } from './mat-components.module';
// Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Charts module
import { ChartsModule } from 'ng2-charts'
import { DynamicIoModule } from 'ng-dynamic-component';

// My components
import { AppComponent } from './app.component';

// Page Components
import { SimulationComponent } from './pages/simulation/simulation.component';
import { CompareComponent } from './pages/compare/compare.component';

// Layout and Item Components
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SummaryComponent } from './layout/summary/summary.component';
import { BarChartComponent } from './layout/bar-chart/bar-chart.component';
import { ItemBuffetComponent } from './layout/item-buffet/item-buffet.component'
import { AddItemComponent } from './layout/add-item/add-item.component';
import { ItemComponent } from './items/item/item.component';
import { IncomeComponent } from './items/income/income.component';
import { PaycheckComponent } from './items/paycheck/paycheck.component';
import { ExpenseComponent } from './items/expense/expense.component';
import { MortgageComponent } from './items/mortgage/mortgage.component';
import { InvestComponent } from './items/invest/invest.component';

// Services
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    PaycheckComponent,
    ItemComponent,
    AddItemComponent,
    NavBarComponent,
    SimulationComponent,
    ItemBuffetComponent,
    BarChartComponent,
    MortgageComponent,
    ExpenseComponent,
    InvestComponent,
    SummaryComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    MatComponentsModule,
    DynamicIoModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }