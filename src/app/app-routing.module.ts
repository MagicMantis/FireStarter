import { SimulationComponent } from './simulation/simulation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareComponent } from './compare/compare.component';


const routes: Routes = [
  {
    path: "",
    component: SimulationComponent
  },
  {
    path: "",
    component: CompareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
