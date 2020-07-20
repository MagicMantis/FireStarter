import { AuthService } from './services/auth.service';

import { MatComponentsModule } from './mat-components.module';
// Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//Firebase
import { AngularFireModule } from "@angular/fire"
import { AngularFireAuthModule } from "@angular/fire/auth"
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { environment } from './../environments/environment';

// Charts module
import { ChartsModule } from 'ng2-charts'
import { DynamicComponentModule, DynamicIoModule } from 'ng-dynamic-component';

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
import { ItemSetComponent } from './layout/item-set/item-set.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


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
    CompareComponent,
    ItemSetComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    VerifyEmailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ChartsModule,
    MatComponentsModule,
    DynamicIoModule,
    DynamicComponentModule,
  ],
  providers: [
    DataService, 
    AuthService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }