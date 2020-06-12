import { SimulationComponent } from './pages/simulation/simulation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareComponent } from './pages/compare/compare.component';


const routes: Routes = [
  {
    path: "",
    component: SimulationComponent
  },
  {
    path: "compare",
    component: CompareComponent
  },
  {
    path: "**",
    component: SimulationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
