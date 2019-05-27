import { Component, OnInit } from '@angular/core';
import{EMPLOYEES} from '../employee.mock'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

/*
  employee={
    id:100,
    name:'anitha',
    address:'calicut',
    age:34
  };*/
  emp=EMPLOYEES;

  ngOnInit() {
  }

}
