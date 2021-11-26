import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [{
    oid: '08520606610', name: 'Carlos Diego', categoria: 'Estudante'
  }];
  displayedColumns = ['oid','name', 'categoria']


  constructor() { }

  ngOnInit(): void {
  }

}
