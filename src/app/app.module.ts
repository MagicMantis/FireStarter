// angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

// Charts module
import { ChartsModule } from 'ng2-charts'

// My components
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SimulationComponent } from './simulation/simulation.component';
import { ItemBuffetComponent } from './layout/item-buffet/item-buffet.component'
import { DataService } from './services/data.service';
import { IncomeComponent } from './items/income/income.component';
import { PaycheckComponent } from './items/paycheck/paycheck.component';
import { ItemComponent } from './items/item/item.component';
import { AddItemComponent } from './layout/add-item/add-item.component';
import { BarChartComponent } from './layout/bar-chart/bar-chart.component';
import { MortgageComponent } from './items/mortgage/mortgage.component';
import { ExpenseComponent } from './items/expense/expense.component';


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
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatChipsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }