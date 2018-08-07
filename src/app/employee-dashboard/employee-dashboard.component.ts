import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeService, TableOptions, Employee } from '../employees.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html'
})
export class EmployeeDashboardComponent {
  tableOptions: Observable<TableOptions>;
  employees: Observable<Employee[]>;

  constructor(employeeService: EmployeeService) {
    this.tableOptions = employeeService.tableOptions;
    this.employees = employeeService.employees;
  }
}
