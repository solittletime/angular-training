import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeListHeaderComponent } from './employee-list-header/employee-list-header.component';

const routes: Routes = [
  { path: '', component: EmployeeDashboardComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EmployeeFilterComponent,
    EmployeeListComponent,
    EmployeeListHeaderComponent,
    EmployeeDashboardComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
