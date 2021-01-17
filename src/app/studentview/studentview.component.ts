import { Component, OnInit } from '@angular/core';
import {Studentlist} from "../studentlist/studentlist";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
  student = null
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['studentnumber'])
      let students = new Studentlist()
      var stud = students.students
      this.student = stud.filter(student => student.studentnumber == params['studentnumber'])
    });

  }

}
