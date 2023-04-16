import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shell-feature/dashboard/dashboard.component';
const data = require("../appSettings/appSettings.json");
const webpackConfig = data.webpackConfig;

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./shell-feature/shell-feature-routing.module').then(m => m.ShellFeatureRoutingModule)
  },
  {
    path: 'jobs',
    loadChildren: () => loadRemoteModule(webpackConfig.jobs).then((m: any) => m.JobsFeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
