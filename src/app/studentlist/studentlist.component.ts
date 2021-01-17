import { Component, OnInit } from '@angular/core';
import {Studentlist} from './studentlist.js'
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{
  studentlist = null
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['level'])
      let students = new Studentlist()
      var stud = students.students
      this.studentlist = stud.filter(student => student.level == params['level'])
    });
  }

}
