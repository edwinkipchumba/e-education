import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course= [
  {'id':1,'name':'Learn Angular','description':'angular.........','image':'../..assets/images/angu-img.png'},
  {'id':2,'name':'Learn Flask','description':'flask.........','image':'../..assets/images/flask-img.png'},
  {'id':3,'name':'Learn Python','description':'python.........','image':'../..assets/images/python-img.png'},
  {'id':4,'name':'Learn Reactjs','description':'reactjs.........','image':'../..assets/images/react-img.png'},
  {'id':5,'name':'Learn Javascript','description':'javascript.........','image':'../..assets/images/ts-js.png'}
]
}
