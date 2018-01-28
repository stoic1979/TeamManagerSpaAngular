import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	displayedColumns = ['position', 'name', 'weight', 'code'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  code: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Anna', weight: 1.0079, code: 'H'},
  {position: 2, name: 'Angelina', weight: 4.0026, code: 'He'},
  {position: 3, name: 'Briana', weight: 6.941, code: 'Li'},
  {position: 4, name: 'Bonjovi', weight: 9.0122, code: 'Be'},
  {position: 5, name: 'Cindy', weight: 10.811, code: 'B'},
  {position: 6, name: 'Diana', weight: 12.0107, code: 'C'},
  {position: 7, name: 'Dolly', weight: 14.0067, code: 'N'},
  {position: 8, name: 'Heena', weight: 15.9994, code: 'O'},
  {position: 9, name: 'Hitler', weight: 18.9984, code: 'F'},
  {position: 10, name: 'Neo', weight: 20.1797, code: 'Ne'},
  {position: 11, name: 'Navi', weight: 22.9897, code: 'Na'},
  {position: 12, name: 'Ram', weight: 24.305, code: 'Mg'},
  {position: 13, name: 'Singh', weight: 26.9815, code: 'Al'},
  {position: 14, name: 'Leo', weight: 28.0855, code: 'Si'},
  {position: 15, name: 'Laddi', weight: 30.9738, code: 'P'},
  {position: 16, name: 'Bittu', weight: 32.065, code: 'S'},
  {position: 17, name: 'Nakazima', weight: 35.453, code: 'Cl'},
  {position: 18, name: 'Mazumi', weight: 39.948, code: 'Ar'},
  {position: 19, name: 'Suzuki', weight: 39.0983, code: 'K'},
  {position: 20, name: 'Miyazaki', weight: 40.078, code: 'Ca'},
];