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
  {'id':1,'name':'Learn Angular','description':'Angular is a platform and framework used to build single-page applications using HTML and TypeScript. ','image':'./assets/images/angu-img.png'},
  {'id':2,'name':'Learn Python/Flask','description':'flask.........','image':'../../assets/images/flask-img.png'},
  {'id':3,'name':'Learn Reactjs','description':'reactjs.........','image':'../../assets/images/react-img.png'},
  {'id':4,'name':'Learn JSscript','description':'javascript.........','image':'../../assets/images/ts-js.png'}
]
}
